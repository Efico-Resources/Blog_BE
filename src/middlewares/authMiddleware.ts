import { Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { handleErrors } from '../utils/handle_errors'
import { getEnvs } from '../utils/env_vars'
import { User } from '../models/User'

export function requireAuth (req: Request, res: Response, next: any) {
    const token = req.header('token');

    if (token) {
        verify(token, getEnvs().JWT_SECRET, async (error: any, decodedToken: any) => {
            
            if (error) {
                const errors = handleErrors({}, false, true);

                res.status(403).json(errors);
            } else {
                const user = await User.findById(decodedToken.id);
                next();
            }
        })
    } else {
        const errors = handleErrors({}, false, true);

        res.status(403).json(errors);
    }
}