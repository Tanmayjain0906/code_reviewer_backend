const express = require("express");
const getReviewController = require("../controllers/ai.controller");
const aiRoute = express.Router();

aiRoute.post("/get-review", getReviewController);


module.exports = aiRoute;