// Simple in-memory rate limiter for AI requests
class RateLimiter {
  private lastRequestTime: number = 0;
  private minDelayMs: number;

  constructor(minDelaySeconds: number = 5) {
    this.minDelayMs = minDelaySeconds * 1000;
  }

  async checkAndWait(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;

    if (timeSinceLastRequest < this.minDelayMs) {
      const waitTime = this.minDelayMs - timeSinceLastRequest;
      const waitSeconds = Math.ceil(waitTime / 1000);
      throw new Error(
        ` Please wait ${waitSeconds} seconds before making another prediction to avoid rate limits.`
      );
    }

    this.lastRequestTime = now;
  }

  getTimeUntilNextRequest(): number {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    const timeRemaining = Math.max(0, this.minDelayMs - timeSinceLastRequest);
    return Math.ceil(timeRemaining / 1000);
  }
}

// Global rate limiter instance - 5 seconds between requests
export const aiRateLimiter = new RateLimiter(5);
