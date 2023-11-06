const express = require('express');
const historyController = require("../controllers/historyController");
const historyRouter = express.Router();

historyRouter.post("/add", historyController.addQuestions);
historyRouter.get("./:username", historyController.getEventByUser);
historyRouter.get("./roomId", historyController.getEventByRoomId);
historyRouter.get("./questionId", historyController.getEventByQuestionId);

module.exports = historyRouter;