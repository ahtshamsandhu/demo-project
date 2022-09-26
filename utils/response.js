exports.SuccessResponse = (ctx, status, data = '') => {
    ctx.status(status).json({
      success: true,
      data
    });
  };
  
  exports.ErrorResponse = (ctx, status, data = '') => {
    ctx.status(status).json({
      success: false,
      message: data
    });
  };
  