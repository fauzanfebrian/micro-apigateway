module.exports = (req, res, err) => {
  if (!req || !res || !err) return;
  console.log(err);
  if (err.code === "ECONNREFUSED")
    return res
      .status(500)
      .json({ status: "error", message: "service unavailable" });
  let status = err.response ? err.response.status : 500;
  let data = err.response ? err.response.data : err.message;

  return res.status(status).json(data);
};
