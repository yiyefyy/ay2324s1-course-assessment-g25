const { Match, Pair } = require('../models');
/* const { axios } = require('axios') */
const { Op } = require('sequelize');

const getPairByUsername = async (req, res, next) => {
    try {
        const username = req.params.username;
        const pair = await Pair.findOne({
            where: {
                [Op.or]: [
                    { username1: username },
                    { username2: username }
                ],
                isDone: true
            }
        })
        if (pair instanceof Pair) {
            res.status(200).json({ res: pair })
        } else {
            res.status(404).json({ error: 'You do not have a pair' })
        }
    } catch (err) {
        next(err)
    }
}

const getPairByRoomId = async (req, res, next) => {
    try {
        const id = req.params.roomId;
        const pair = await Pair.findOne({
            where: { roomId: id }
        })
        if (!pair) {
            res.status(404).json({ error: 'This pair does not exist!' })
        }
        res.status(200).json({ res: pair })
    } catch (err) {
        next(err)
    }
}

const getAllPairs = async (req, res, next) => {
    try {
        const pairList = await Pair.findAll();
        res.status(200).json({ res: pairList })
    } catch (err) {
        next(err)
    }
}

const getAllMatch = async (req, res, next) => {
    try {
        const matchList = await Match.findAll();
        res.status(200).json({ res: matchList })
    } catch (err) {
        next(err)
    }
}

const addPair = async (req, res, next) => {
    try {
        const { username1, username2, complexity, roomId } = req.body
        const pair = await Pair.create({
            username1: username1,
            username2: username2,
            complexity: complexity,
            roomId: roomId
            //question: qn_id,
        });
        res.status(200).json({ res: pair })
    } catch (err) {
        next(err)
    }
}

const endSession = async (req, res, next) => {
    try {
        const id = req.params.roomId;
        const pair = await Pair.findOne({
            where: { roomId: id }
        })
        if (pair) {
            pair.roomId = id;
            await pair.save();
            res.status(200).json({ res: pair })
        } else {
            res.status(404).json({error: 'This pair does not exist!'})
        }
    } catch (err) {
        next(err)
    }
}

const deletePair = async (req, res, next) => {
    try {
        const username = req.params.username
        const pair = await Pair.findOne({
            where: {
                [Op.or]: [
                    { username1: username },
                    { username2: username }
                ]
            }
        })
        if (!pair) {
            res.status(404).json({ error: 'Pair is not found' })
        }
        await Pair.destroy({
            where: {
                [Op.or]: [
                    { username1: username },
                    { username2: username }
                ]
            }
        })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getPairByUsername,
    deletePair,
    getAllPairs,
    getAllMatch,
    addPair,
    getPairByRoomId,
    endSession
}


