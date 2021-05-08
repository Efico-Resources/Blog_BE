import {Request, Response} from 'express'

// Display Login page
const Login = (req: Request, res: Response) => {
	const {email, password} = req.body
	console.log(email, password)
	res.status(201).json({
		message: 'Token retrieved successfully',
		status: 'ok',
		data: {
			email, password
		}
	});
};

// Make function global
module.exports = { Login };
