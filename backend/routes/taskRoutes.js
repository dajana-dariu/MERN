const express = require('express');
const router = express.Router();
const { getTasks } = require('../controllers/taskController.js');
const { setTask } = require('../controllers/taskController.js');
const { updateTask } = require('../controllers/taskController.js');
const { deleteTask } = require('../controllers/taskController.js');

router.get('/', getTasks);
router.post('/', setTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
module.exports = router;
