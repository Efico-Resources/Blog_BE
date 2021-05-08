// Get the required packages 
const express = require('express');
const router = express.Router();

// Import controllers
const PostsController = require('../controllers/PostsController');
const AuthController = require('../controllers/AuthController');

import { Register } from '../controllers/RegisterController';

// Respond to /
router.get('/', PostsController.Home);

// Respond to /login
router.post('/login', AuthController.Login);

// Respond to /register
router.post('/register', Register)

// Make code global
module.exports = router;
