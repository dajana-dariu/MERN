const express = require('express');
const router = express.Router();
const { getTasks } = require('../controllers/taskController');
const { setTask } = require('../controllers/taskController');
const { updateTask } = require('../controllers/taskController');
const { deleteTask } = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', setTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
module.exports = router;
