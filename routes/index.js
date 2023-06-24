const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.home);

router.post('/create-todo', homeController.createTodo);  // controller for Creating Todo list

router.post('/delete-todo', homeController.deleteTodo); // Controller for deleting Todo list

router.get('/editdata', homeController.editPage); // Controller for go to update page for todolist

router.post('/edit-todolist', homeController.editDetails);  // Controller for updating Todo list

module.exports = router;