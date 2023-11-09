const { AttemptedQuestions } = require('../models');
const { Op } = require('sequelize');

const addQuestions = async (req, res, next) => {
    try {
        const { roomId, username, questionId, attempedDate } = req.body;

        if (!roomId, !username, !questionId, !attempedDate) {
            res.status(400).json({ error: "Missing field" });
            return;
        }

        const count = await Events.count({
            where: {
                [Op.or]: [
                    { roomId: roomtId,
                    username: username },
                ],
            },
        });

        if (count !== 0) {
            res.status(400).json({ error: "Question has been attempted" });
            return;
        }

        const AttemptedQuestion = await AttemptedQuestions.create({
            roomId: roomId,
            username: username,
            questionId: questionId,
            attempedDate: attempedDate
        });

        res.status(201).json({ res: AttemptedQuestion });
    } catch (err) {
        next(err);
    }
};

const getEventByUser = async (req, res, next) => {
    try {
        const username = req.params.username;
        const questionList = await Events.findAll({where: {username}});
        if (!questionList) {
            res.status(404).json({ error: "Event does not exist!" });
            return;
        }
        res.status(200).json({ res: questionList });
    } catch (err) {
        next(err);
    }
}

const getEventByRoomId = async (req, res, next) => {
    try {
        const roomId = req.params.roomId;
        const questionList = await Events.findAll({where: {roomId}});
        if (!questionList) {
            res.status(404).json({ error: "Event does not exist!" });
            return;
        }
        res.status(200).json({ res: questionList });
    } catch (err) {
        next(err);
    }
}

const getEventByQuestionId = async (req, res, next) => {
    try {
        const questionId = req.params.questionId;
        const questionList = await Events.findAll({where: {questionId}});
        if (!questionList) {
            res.status(404).json({ error: "Event does not exist!" });
            return;
        }
        res.status(200).json({ res: questionList });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getEventByQuestionId,
    getEventByRoomId,
    getEventByUser,
    addQuestions
}