import { Router } from 'express';
import { requireAuth } from '../../middlewares/authMiddleware'

const router = Router();

import { showAll } from '../../controllers/PostsController';

// Respond to /
router.get('/', requireAuth, showAll);

// Make code global
module.exports = router;
