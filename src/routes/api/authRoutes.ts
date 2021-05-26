import { Router } from 'express';
import { requireAuth } from '../../middlewares/authMiddleware'

const router = Router();

import { Login, Logout, Register } from '../../controllers/AuthController';

// Respond to /login
router.post('/login', Login);

// Respond to /register
router.post('/register', Register);

// Respond to /logout
router.get('/logout', requireAuth, Logout);

// Make code global
module.exports = router;
