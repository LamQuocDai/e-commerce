const response = {
  success: (res, message, data = null) => {
    res.status(200).json({
      success: true,
      message: message,
      data: data,
    });
  },
  error: (res, message, statusCode = 500) => {
    res.status(statusCode).json({
      success: false,
      message: message,
    });
  },
};

export default response;