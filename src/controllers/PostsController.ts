import { Request, Response } from 'express'

export function showAll (req: Request, res: Response) {
	res.json({
		message: 'Posts retrieved successfully',
		status: 'ok',
		data: {
			"Hey": "Hey"
		}
	})
};
