const { apiAdapter, errorHandler } = require("../../api");
const { URL_SERVICE_ORDER } = process.env;
const api = apiAdapter(URL_SERVICE_ORDER);

module.exports = {
  create: async (req, res) => {
    try {
      const webhook = await api.post("/api/webhook", req.body);
      return res.json(webhook.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
};
