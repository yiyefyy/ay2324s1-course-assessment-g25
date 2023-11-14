const { AttemptedQuestions } = require('../models');
const { Op } = require('sequelize');

const addQuestions = async (req, res, next) => {
    try {
        const { roomId, username, questionId } = req.body;

        const now = new Date();
        const singaporeTime = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Singapore' });
        const attempedDate = singaporeTime.format(now);

        if (!roomId, !username, !questionId, !attempedDate) {
            res.status(400).json({ error: "Missing field" });
            return;
        }

        const count = await AttemptedQuestions.count({
            where: {
                questionId: questionId,
                username: username,
            },
        });

        if (count !== 0) {
            res.status(400).json({ error: "Question has been attempted" });
            return;
        }

        const attemptedQuestion = await AttemptedQuestions.create({
            roomId: roomId,
            username: username,
            questionId: questionId,
            attempedDate: attempedDate
        });

        res.status(201).json({ res: attemptedQuestion });
    } catch (err) {
        next(err);
    }
};

const getHistoryByUser = async (req, res, next) => {
    try {
        const username = req.params.username;
        const questionList = await AttemptedQuestions.findAll({ where: { username } });
        if (!questionList) {
            res.status(404).json({ error: "Questions does not exist!" });
            return;
        }
        res.status(200).json({ res: questionList });
    } catch (err) {
        next(err);
    }
}

const getHistoryByRoomId = async (req, res, next) => {
    try {
        const roomId = req.params.roomId;
        const questionList = await AttemptedQuestions.findAll({ where: { roomId } });
        if (!questionList) {
            res.status(404).json({ error: "Event does not exist!" });
            return;
        }
        res.status(200).json({ res: questionList });
    } catch (err) {
        next(err);
    }
}

const getHistoryByQuestionId = async (req, res, next) => {
    try {
        const questionId = req.params.questionId;
        const questionList = await Events.findAll({ where: { questionId } });
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
    getHistoryByQuestionId,
    getHistoryByRoomId,
    getHistoryByUser,
    addQuestions
}