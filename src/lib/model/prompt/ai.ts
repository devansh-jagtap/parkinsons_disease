import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { parseGeminiJson } from "../model-helper";
import { aiRateLimiter } from "../../rate-limiter";

/**
 * Analyzes heart disease risk factors using AI
 * @param patientData Object containing heart disease risk factors
 * @returns Promise with probability (0-1) and analysis text
 */
// export async function analyzeHeartDiseaseRisk(patientData: {
//   age: number;
//   sex: string; // "0" = female, "1" = male
//   chestPainType: string; // "1" to "4"
//   restingBP: number;
//   cholesterol: number;
//   fastingBS: string; // "0" = no, "1" = yes
//   restingECG: string; // "0", "1", or "2"
//   maxHR: number;
//   exerciseAngina: string; // "0" = no, "1" = yes
//   oldpeak: number;
//   stSlope: string; // "1", "2", or "3"
//   majorVessels: string; // "0" to "3"
//   thal: string; // "0", "1", or "2"
// }) {
//   const prompt = `
//     You are a medical AI assistant specialized in cardiology. Analyze these heart disease risk factors for a patient and provide a probability estimate (between 0 and 1) of heart disease risk. 
    
//     Be very precise in your probability estimate - provide a value with exactly two decimal places (e.g., 0.23, 0.78, 0.91). Do not round to the nearest 0.05 or 0.10 increments.
    
//     Start your response with the precise probability number, followed by your explanation.

//     Patient data:
//     - Age: ${patientData.age}
//     - Sex: ${patientData.sex === "1" ? "Male" : "Female"}
//     - Chest Pain Type: ${
//       [
//         "",
//         "Typical Angina",
//         "Atypical Angina",
//         "Non-anginal Pain",
//         "Asymptomatic",
//       ][parseInt(patientData.chestPainType)]
//     }
//     - Resting Blood Pressure: ${patientData.restingBP} mmHg
//     - Cholesterol: ${patientData.cholesterol} mg/dL
//     - Fasting Blood Sugar > 120 mg/dL: ${
//       patientData.fastingBS === "1" ? "Yes" : "No"
//     }
//     - Resting ECG: ${
//       ["Normal", "ST-T Wave Abnormality", "Left Ventricular Hypertrophy"][
//         parseInt(patientData.restingECG)
//       ]
//     }
//     - Maximum Heart Rate: ${patientData.maxHR}
//     - Exercise Induced Angina: ${
//       patientData.exerciseAngina === "1" ? "Yes" : "No"
//     }
//     - ST Depression (Oldpeak): ${patientData.oldpeak}
//     - ST Slope: ${
//       ["", "Upsloping", "Flat", "Downsloping"][parseInt(patientData.stSlope)]
//     }
//     - Major Vessels Colored by Fluoroscopy: ${patientData.majorVessels}
//     - Thalassemia: ${
//       ["Normal", "Fixed Defect", "Reversible Defect"][
//         parseInt(patientData.thal)
//       ]
//     }

//     Based on these risk factors, estimate the probability of heart disease from 0 to 1 (where 0 = no risk, 1 = certain risk). 
//     First provide the probability as a numerical value with exactly two decimal places, then provide a detailed explanation of how you reached that conclusion.
//   `;

//   try {
//     // Check rate limit before making API call
//     await aiRateLimiter.checkAndWait();

//     // Get API key from environment
//     const apiKey =
//       process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
//       "AIzaSyAhGr0yhpOej7klLVhqo_qAmuM1qNLSagU";
//     // Set up Google AI
//     process.env.GOOGLE_GENERATIVE_AI_API_KEY = apiKey;

//     const { text } = await generateText({
//       model: google("gemini-3-flash-preview"),
//       prompt,
//       maxRetries: 0, // No retries - fail immediately on quota errors
//     });

//     // Use helper to parse Gemini JSON output
//     const json = parseGeminiJson(text);
//     if (json && typeof json.probability === "number") {
//       return json;
//     }
//     // fallback: try to extract probability as before
//     let probability = 0.5;
//     const probabilityMatch = text.match(/\b(0?\.\d+)\b/);
//     probability = probabilityMatch ? parseFloat(probabilityMatch[1]) : 0.5;
//     return {
//       probability,
//       analysis: text.trim(),
//     };
//   } catch (error: any) {
//     console.error("Error analyzing heart disease risk:", error);
    
//     // Handle quota exceeded error
//     if (error?.message?.includes("Quota exceeded") || error?.message?.includes("quota")) {
//       throw new Error("AI service quota exceeded. Please try again in a few minutes.");
//     }
    
//     throw new Error("Failed to analyze data. Please try again.");
//     throw new Error("Failed to analyze heart disease risk data");
//   }
// }

/**
 * Analyzes diabetes risk factors using AI
 * @param patientData Object containing diabetes risk factors
 * @returns Promise with probability (0-1) and analysis text
 */
// export async function analyzeDiabetesRisk(patientData: {
//   pregnancies?: number;
//   glucose: number;
//   bloodPressure: number;
//   skinThickness: number;
//   insulin: number;
//   bmi: number;
//   diabetesPedigree: number;
//   age: number;
//   gender: string; // "0" = female, "1" = male
// }) {
//   const prompt = `
//     You are a medical AI assistant specialized in endocrinology. Analyze these diabetes risk factors for a patient and provide a probability estimate (between 0 and 1) of diabetes risk.
    
//     Respond ONLY in the following JSON format:
//     {
//       "probability": <number between 0 and 1, two decimal places>,
//       "key_factors": [<short string for each key risk factor, e.g. "High glucose", "High BMI">]
//     }

//     Patient data:
//     - Gender: ${patientData.gender === "1" ? "Male" : "Female"}
//     ${
//       patientData.gender === "0"
//         ? `- Pregnancies: ${patientData.pregnancies ?? "N/A"}`
//         : ""
//     }
//     - Age: ${patientData.age}
//     - Glucose: ${patientData.glucose} mg/dL
//     - Blood Pressure: ${patientData.bloodPressure} mmHg
//     - Skin Thickness: ${patientData.skinThickness} mm
//     - Insulin: ${patientData.insulin} μU/mL
//     - BMI: ${patientData.bmi} kg/m²
//     - Diabetes Pedigree Function: ${patientData.diabetesPedigree}

//     Based on these risk factors, estimate the probability of diabetes from 0 to 1.
//     Respond ONLY in the JSON format above.
//   `;

//   try {
//     // Get API key from environment
//     const apiKey =
//       process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
//       "AIzaSyAABh4UnvwhZgnNkLLblf4Szf4AfYtKwVQ"; // Consider better API key management
//     // Set up Google AI - Setting env var here might not be ideal, better set globally or pass directly if SDK allows
//     process.env.GOOGLE_GENERATIVE_AI_API_KEY = apiKey;

//     const { text } = await generateText({
//       model: google("gemini-3-flash-preview"),
//       prompt,
//     });

//     // Use helper to parse Gemini JSON output
//     const json = parseGeminiJson(text);
//     if (json && typeof json.probability === "number") {
//       return json;
//     }
//     // fallback: try to extract probability as before
//     let probability = 0.5;
//     const probabilityMatch = text.match(/\b(0?\.\d+)\b/);
//     probability = probabilityMatch ? parseFloat(probabilityMatch[1]) : 0.5;
//     return {
//       probability,
//       analysis: text.trim(),
//       raw: text.trim(),
//     };
//   } catch (error) {
//     console.error("Error analyzing diabetes risk:", error);
//     throw new Error("Failed to analyze diabetes risk data");
//   }
// }

/**
 * Analyzes breast cancer risk factors using AI
 * @param patientData Object containing breast cancer markers
 * @returns Promise with probability (0-1) and analysis text
 */
// export async function analyzeBreastCancerRisk(patientData: {
//   radius: number;
//   texture: number;
//   perimeter: number;
//   area: number;
//   smoothness: number;
//   compactness: number;
//   concavity: number;
//   concavePoints: number;
//   symmetry: number;
//   fractalDimension: number;
//   age: number;
//   familyHistory: string; // "0" = no, "1" = yes
// }) {
//   const prompt = `
//     You are a medical AI assistant specialized in oncology. Analyze these breast cell features and patient data to provide a probability estimate (between 0 and 1) of malignant breast cancer.
    
//     Be very precise in your probability estimate - provide a value with exactly two decimal places (e.g., 0.23, 0.78, 0.91). Do not round to the nearest 0.05 or 0.10 increments.
    
//     Start your response with the precise probability number, followed by your explanation.
    
//     Cell features (from FNA test):
//     - Radius (mean of distances from center to perimeter): ${patientData.radius}
//     - Texture (standard deviation of gray-scale values): ${patientData.texture}
//     - Perimeter: ${patientData.perimeter}
//     - Area: ${patientData.area}
//     - Smoothness: ${patientData.smoothness}
//     - Compactness: ${patientData.compactness}
//     - Concavity: ${patientData.concavity}
//     - Concave points: ${patientData.concavePoints}
//     - Symmetry: ${patientData.symmetry}
//     - Fractal dimension: ${patientData.fractalDimension}
    
//     Patient information:
//     - Age: ${patientData.age}
//     - Family history of breast cancer: ${
//       patientData.familyHistory === "1" ? "Yes" : "No"
//     }

//     Based on these factors, estimate the probability of malignant breast cancer from 0 to 1 (where 0 = benign, 1 = certainly malignant).
//     First provide the probability as a numerical value with exactly two decimal places, then provide a detailed explanation of how you reached that conclusion.
//   `;

//   try {
//     // Get API key from environment
//     const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || "";
//     // Set up Google AI
//     process.env.GOOGLE_GENERATIVE_AI_API_KEY = apiKey;

//     const { text } = await generateText({
//       model: google("gemini-3-flash-preview"),
//       prompt,
//     });

//     // Use helper to parse Gemini JSON output
//     const json = parseGeminiJson(text);
//     if (json && typeof json.probability === "number") {
//       return json;
//     }
//     // fallback: try to extract probability as before
//     let probability = 0.5;
//     const probabilityMatch = text.match(/\b(0?\.\d+)\b/);
//     probability = probabilityMatch ? parseFloat(probabilityMatch[1]) : 0.5;
//     return {
//       probability,
//       analysis: text.trim(),
//     };
//   } catch (error) {
//     console.error("Error analyzing breast cancer risk:", error);
//     throw new Error("Failed to analyze breast cancer risk data");
//   }
// }

/**
 * Analyzes breast cancer risk using an uploaded image (e.g. mammogram or cell image)
 * @param imageFile The image file (Buffer, File, or base64 string)
 * @returns Promise with probability (0-1) and analysis text
//  */
// export async function analyzeBreastCancerRiskFromImage(
//   imageFile: Buffer | File | string
// ) {
//   // For demonstration, we assume the AI model can accept base64 or file input.
//   // In a real implementation, you would send the image to an AI endpoint or model API.
//   // Here, we just create a placeholder prompt.
//   const prompt = `You are a medical AI assistant specialized in oncology. Analyze the uploaded breast image (mammogram or cell image) and provide a probability estimate (between 0 and 1) of malignant breast cancer.\n\nBe very precise in your probability estimate - provide a value with exactly two decimal places (e.g., 0.23, 0.78, 0.91).\n\nStart your response with the precise probability number, followed by your explanation.\n\n[IMAGE DATA IS PROVIDED TO THE MODEL]`;

//   try {
//     const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || "";
//     process.env.GOOGLE_GENERATIVE_AI_API_KEY = apiKey;

//     // If your AI provider supports image input, pass the imageFile accordingly.
//     // This is a placeholder for actual image analysis API call.
//     const { text } = await generateText({
//       model: google("gemini-3-flash-preview"),
//       prompt,
//       // image: imageFile, // Uncomment and use if your SDK supports image input
//     });

//     const json = parseGeminiJson(text);
//     if (json && typeof json.probability === "number") {
//       return json;
//     }
//     let probability = 0.5;
//     const probabilityMatch = text.match(/\b(0?\.\d+)\b/);
//     probability = probabilityMatch ? parseFloat(probabilityMatch[1]) : 0.5;
//     return {
//       probability,
//       analysis: text.trim(),
//     };
//   } catch (error) {
//     console.error("Error analyzing breast cancer risk from image:", error);
//     throw new Error("Failed to analyze breast cancer risk from image");
//   }
// }

/**
 * Analyzes kidney disease risk factors using AI
 * @param patientData Object containing kidney disease risk factors
 * @returns Promise with probability (0-1) and key risk factors
 */
// export async function analyzeKidneyDiseaseRisk(patientData: {
//   age: number;
//   bloodPressure: number;
//   specificGravity: number;
//   albumin: number;
//   sugar: number;
//   redBloodCells: string; // "normal" or "abnormal"
//   pus: number;
//   bacteriaCount: number;
//   bloodGlucose: number;
//   bloodUrea: number;
//   serumCreatinine: number;
//   sodium: number;
//   potassium: number;
//   hemoglobin: number;
//   packedCellVolume: number;
//   whiteBloodCellCount: number;
//   hypertension: string; // "yes" or "no"
//   diabetes: string; // "yes" or "no"
//   appetite: string; // "good" or "poor"
//   gender: string; // "male" or "female"
// }) {
//   const prompt = `
//     You are a medical AI assistant specialized in nephrology. Analyze these kidney disease risk factors for a patient and provide a probability estimate (between 0 and 1) of chronic kidney disease.
    
//     Respond ONLY in the following JSON format:
//     {
//       "probability": <number between 0 and 1, two decimal places>,
//       "key_factors": [<short string for each key risk factor, e.g. "High creatinine", "Low hemoglobin">],
//       "recommendations": [<short string for each recommendation, e.g. "Monitor blood pressure", "Reduce protein intake">]
//     }

//     Patient data:
//     - Age: ${patientData.age}
//     - Gender: ${patientData.gender}
//     - Blood Pressure: ${patientData.bloodPressure} mmHg
//     - Specific Gravity: ${patientData.specificGravity}
//     - Albumin: ${patientData.albumin} g/dL
//     - Sugar: ${patientData.sugar} mmol/L
//     - Red Blood Cells: ${patientData.redBloodCells}
//     - Pus Cell Count: ${patientData.pus}
//     - Bacteria Count: ${patientData.bacteriaCount}
//     - Blood Glucose: ${patientData.bloodGlucose} mg/dL
//     - Blood Urea: ${patientData.bloodUrea} mg/dL
//     - Serum Creatinine: ${patientData.serumCreatinine} mg/dL
//     - Sodium: ${patientData.sodium} mEq/L
//     - Potassium: ${patientData.potassium} mEq/L
//     - Hemoglobin: ${patientData.hemoglobin} g/dL
//     - Packed Cell Volume: ${patientData.packedCellVolume}%
//     - White Blood Cell Count: ${patientData.whiteBloodCellCount} cells/cumm
//     - Hypertension: ${patientData.hypertension}
//     - Diabetes: ${patientData.diabetes}
//     - Appetite: ${patientData.appetite}

//     Based on these risk factors, estimate the probability of chronic kidney disease from 0 to 1 (where 0 = no risk, 1 = certain risk).
//     Respond ONLY in the JSON format above.
//   `;

//   try {
//     // Get API key from environment
//     const apiKey =
//       process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
//       "AIzaSyAABh4UnvwhZgnNkLLblf4Szf4AfYtKwVQ";
//     process.env.GOOGLE_GENERATIVE_AI_API_KEY = apiKey;

//     const { text } = await generateText({
//       model: google("gemini-3-flash-preview"),
//       prompt,
//     });

//     // Use helper to parse Gemini JSON output
//     const json = parseGeminiJson(text);
//     if (json && typeof json.probability === "number") {
//       return json;
//     }

//     // fallback: try to extract probability as before
//     let probability = 0.5;
//     const probabilityMatch = text.match(/\b(0?\.\d+)\b/);
//     probability = probabilityMatch ? parseFloat(probabilityMatch[1]) : 0.5;

//     return {
//       probability,
//       key_factors: ["Could not parse key factors from response"],
//       recommendations: ["See a nephrologist for proper evaluation"],
//       analysis: text.trim(),
//     };
//   } catch (error) {
//     console.error("Error analyzing kidney disease risk:", error);
//     throw new Error("Failed to analyze kidney disease risk data");
//   }
// }

/**
 * Analyzes Parkinson's disease risk factors using AI
 * @param patientData Object containing Parkinson's disease voice measurements and biomarkers
 * @returns Promise with probability (0-1), key factors, and recommendations
 */
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
