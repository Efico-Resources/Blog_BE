// Get the required packages 
const express = require('express');
const router = express.Router();

// Import controllers
const PostsController = require('../controllers/PostsController');
const AuthController = require('../controllers/AuthController');

// Respond to /
router.get('/', PostsController.Home);

// Respond to /login
router.get('/login', AuthController.Login);

// Make code global
module.exports = router;
