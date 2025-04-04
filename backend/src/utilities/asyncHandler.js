const asyncHandler = (fn) => async (req, res, next) => {
  try {
    // Execute the function
    await fn(req, res, next);
  } catch (error) {
    // In case of error, respond with an error status and message
    console.error(error); // Optionally log the error for debugging
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

export default asyncHandler;
