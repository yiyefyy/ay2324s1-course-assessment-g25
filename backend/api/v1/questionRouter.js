/**
 * Question Router
 * 
 * This file contains the routes for the Question API endpoints.
 * 
 * @module backend/api/v1/questionRouter
 * 
 * @requires express
 * @requires backend/controllers/QuestionController
 */

import express from 'express';
import QuestionController from '../../controllers/QuestionController.js';

const questionRouter = express.Router();

// Handle GET Requests to /api/v1/questions
questionRouter.get('/', async (req, res) => {
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;
  const result = await QuestionController.list(page, limit);
  res.send(result);
});

// Handle POST requests to /api/v1/questions
questionRouter.post('/', async (req, res) => {
  const result = await QuestionController.create(req.body);
  res.send(result);
});

// Handle GET requests to /api/v1/questions/:questionId
questionRouter.get('/:questionId', async (req, res) => {
  const result = await QuestionController.read(req.params.questionId);
  res.send(result);
});

// Handle PUT requests to /api/v1/questions/:questionId
questionRouter.put('/:questionId', async (req, res) => {
  const result = await QuestionController.update(req.params.questionId, req.body);
  res.send(result);
});

// Handle DELETE requests to /api/v1/questions/:questionId
questionRouter.delete('/:questionId', async (req, res) => {
  const result = await QuestionController.delete(req.params.questionId);
  res.send(result);
});

export default questionRouter;