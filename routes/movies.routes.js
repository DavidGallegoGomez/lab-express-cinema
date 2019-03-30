const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller');

// TODO: list movies route

router.get('/',moviesController.list);
router.get('/:id', moviesController.details)
// TODO: movie detail route

module.exports = router;
