import { Types } from 'mongoose'
import { sign } from 'jsonwebtoken'
import { getEnvs } from './env_vars'
import { Token } from '../models/Token'

export const maxAge = 3 * 24 * 60 * 60;

/**
 * Creates JWT Token
 * @param id user._id
 * @returns 
 */
export async function createToken (id: Types.ObjectId) {
    const token = sign({ id }, getEnvs().JWT_SECRET, {
        expiresIn: maxAge
    });

    const storedToken = await Token.create({ value: token });

    return token;
}