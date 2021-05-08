// Import Types
import {Request, Response} from 'express'

// Display Landing page
const Home = (req: Request, res: Response) => {
	res.json({
		message: 'Posts retrieved successfully',
		status: 'ok',
		data: {
			
		}
	})
};

// Make function global
module.exports = { Home };
