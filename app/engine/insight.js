export const analyzeScreenshot = async (screenshot) => {
  return {
    success: true,
    insight: "This is a placeholder analysis for your screenshot.",
    receivedUri: screenshot.uri,
    timestamp: Date.now(),
  };
};
