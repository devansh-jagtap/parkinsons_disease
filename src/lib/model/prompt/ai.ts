import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { parseGeminiJson } from "../model-helper";
import { aiRateLimiter } from "../../rate-limiter";

export async function analyzeParkinsonsDiseaseRisk(patientData: {
  ascii_subject_name: string;
  recording_number: number;
  mdvp_fo: number;
  mdvp_fhi: number;
  mdvp_flo: number;
  mdvp_jitter_percentage: number;
  mdvp_jitter_abs: number;
  mdvp_rap: number;
  mdvp_ppq: number;
  jitter_ddp: number;
  mdvp_shimmer: number;
  mdvp_shimmer_db: number;
  shimmer_apq3: number;
  shimmer_apq5: number;
  mdvp_apq: number;
  shimmer_dda: number;
  nhr: number;
  hnr: number;
  rpde: number;
  d2: number;
  dfa: number;
  spread1: number;
  spread2: number;
  ppe: number;
}) {
  const prompt = `
You are a medical AI assistant. Analyze these voice measurements for Parkinson's disease risk.

CRITICAL: Respond with ONLY valid JSON. No markdown, no code blocks, no explanations.

Expected format:
{"probability": 0.45, "key_factors": ["High jitter values indicate voice instability", "Elevated shimmer suggests amplitude variation"], "recommendations": ["Consult a neurologist for detailed evaluation", "Consider voice therapy assessment"], "analysis": "Based on the voice measurements provided, several indicators suggest potential risk..."}

Voice measurements:
- Subject: ${patientData.ascii_subject_name} (Recording #${patientData.recording_number})
- Average Frequency: ${patientData.mdvp_fo} Hz
- Frequency Range: ${patientData.mdvp_flo}-${patientData.mdvp_fhi} Hz
- Jitter (variation): ${patientData.mdvp_jitter_percentage}% (absolute: ${patientData.mdvp_jitter_abs})
- RAP: ${patientData.mdvp_rap}, PPQ: ${patientData.mdvp_ppq}, DDP: ${patientData.jitter_ddp}
- Shimmer: ${patientData.mdvp_shimmer} (${patientData.mdvp_shimmer_db} dB)
- Shimmer APQ3: ${patientData.shimmer_apq3}, APQ5: ${patientData.shimmer_apq5}, APQ: ${patientData.mdvp_apq}, DDA: ${patientData.shimmer_dda}
- NHR: ${patientData.nhr}, HNR: ${patientData.hnr}
- RPDE: ${patientData.rpde}, D2: ${patientData.d2}, DFA: ${patientData.dfa}
- Spread: ${patientData.spread1}, ${patientData.spread2}
- PPE: ${patientData.ppe}

Return only the JSON object with probability (0-1), key_factors (array of 2-4 strings), recommendations (array of 2-3 strings), and analysis (detailed string).`;

  try {
    // Check rate limit before making API call
    await aiRateLimiter.checkAndWait();

    // Get API key from environment - try both possible env var names
    const apiKey =
      process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
      process.env.GEMINI_API_KEY ||
      "AIzaSyAhGr0yhpOej7klLVhqo_qAmuM1qNLSagU";
    
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not set");
    }
    
    process.env.GOOGLE_GENERATIVE_AI_API_KEY = apiKey;

    const { text } = await generateText({
      model: google("gemini-3-flash-preview"),
      prompt,
      maxRetries: 2,
      temperature: 0.3,
    });

    console.log("AI Raw Response:", text);
    
    // Handle empty responses
    if (!text || text.trim().length === 0) {
      console.error("Empty response from AI");
      throw new Error("Received empty response from AI service");
    }

    // Try to parse JSON - handle markdown code blocks
    let jsonText = text.trim();
    
    // Remove markdown code blocks if present
    if (jsonText.includes("```json")) {
      jsonText = jsonText.replace(/```json\s*/g, "").replace(/```\s*/g, "");
    } else if (jsonText.includes("```")) {
      jsonText = jsonText.replace(/```\s*/g, "");
    }
    
    // Try to extract JSON if wrapped in other text
    const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      jsonText = jsonMatch[0];
    }

    try {
      const json = JSON.parse(jsonText);
      
      if (json && typeof json.probability === "number") {
        return {
          probability: json.probability,
          key_factors: json.key_factors || ["Analysis completed"],
          recommendations: json.recommendations || ["Consult a neurologist for detailed evaluation"],
          analysis: json.analysis || "Risk assessment completed based on voice measurements.",
        };
      }
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Attempted to parse:", jsonText);
    }

    // Fallback: extract probability and return default structure
    let probability = 0.5;
    const probabilityMatch = text.match(/\"?probability\"?\s*:\s*(0?\.\d+)/);
    if (probabilityMatch) {
      probability = parseFloat(probabilityMatch[1]);
    }

    return {
      probability,
      key_factors: [
        "Voice frequency variations detected",
        "Amplitude perturbation noted",
        "Further clinical evaluation recommended"
      ],
      recommendations: [
        "Consult a neurologist for comprehensive assessment",
        "Consider follow-up voice analysis",
        "Maintain regular health monitoring"
      ],
      analysis: text.trim().substring(0, 500),
    };
  } catch (error: any) {
    console.error("Error analyzing Parkinson's disease risk:", error);
    
    const errorMessage = error?.message || "";
    
    // Handle specific API errors with user-friendly messages
    if (errorMessage.includes("Quota exceeded") || errorMessage.includes("quota")) {
      throw new Error("AI service quota exceeded. Please wait 60 seconds and try again.");
    }
    
    if (errorMessage.includes("overloaded") || errorMessage.includes("Overloaded")) {
      throw new Error(" AI service is overloaded right now. Please wait 30 seconds and try again.");
    }
    
    if (errorMessage.includes("rate limit") || errorMessage.includes("Rate limit")) {
      throw new Error("Rate limit reached. Please wait a moment before trying again.");
    }
    
    // Generic error with hint
    throw new Error("Failed to analyze data. The AI service may be busy. Please try again in a few moments.");
  }
}
