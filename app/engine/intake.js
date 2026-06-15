export const processScreenshot = async (uri) => {
  return {
    success: true,
    message: "Screenshot received",
    uri,
    timestamp: Date.now(),
  };
};
