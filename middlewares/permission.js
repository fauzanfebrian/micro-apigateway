module.exports =
  (...roles) =>
  (req, res, next) => {
    const role = req.user.role;
    if (!roles.includes(role)) {
      return res.status(405).json({
        status: "error",
        message: "you dont have permission",
      });
    }
    return next();
  };
