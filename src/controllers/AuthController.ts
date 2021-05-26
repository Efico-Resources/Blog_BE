import { Request, Response } from 'express'
import { loginReq, registerReq } from '../api_contracts/authController.contract.ctrl'
import { CustomRequest } from '../interfaces/CustomRequest'
import { User } from '../models/User'
import { handleErrors } from '../utils/handle_errors'
import { createToken } from '../utils/create_token'
import { compare } from 'bcrypt'
import { Token } from '../models/Token'
import { getAuthUser } from '../utils/getLoggedInUser'

/**
 * Authenticate Users
 * @param req express.Request
 * @param res express.Response
 */
export async function Login (req: CustomRequest<loginReq>, res: Response) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        
        if (user) {
            const auth = await compare(password.toString(), user.password)

            if (auth) {
                const token = await createToken(user._id)
                res.status(201).json({ user, token });
            } else {
                const errors = handleErrors({}, true);

                res.status(401).json(errors);
            }
        } else {
            res.status(404).json({
                message: "User Not Found"
            })
        }
    } catch (error) {
        const errors = handleErrors(error);

        res.status(401).json(errors);
    }
}

/**
 * Create New Users
 * @param req express.Request
 * @param res express.Response
 */
export async function Register (req: CustomRequest<registerReq>, res: Response) {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({ name, email, password: password.toString() })
        const token = createToken(user._id);
        res.status(201).json({ user, token });
    } catch (error) {
        const errors = handleErrors(error);

        res.status(400).json(errors);
    }
}

/**
 * End All Active Sessions .et al
 * @param req express.Request
 * @param res express.Response
 */
export async function Logout (req: Request, res: Response) {
    const token = req.header('token');

    try {
        const storedToken = await Token.deleteOne({ value: token });

        if (storedToken.deletedCount > 0) {
            res.status(204).json({
                message: "User Logged Out"
            });
        } else {
            res.json({
                message: "User Logged Out"
            })
        }
    } catch (error) {
        const errors = handleErrors(error);

        res.status(400).json(errors);
    }
}