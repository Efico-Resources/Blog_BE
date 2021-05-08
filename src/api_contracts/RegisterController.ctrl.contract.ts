import { Request, Response } from 'express';

/**
 * Expected User Request Object
 * @param { string } name
 * @param { string } email
 * @param { string } password
 */
export interface userReq extends Request {
    name: string,
    email: string,
    password: string
};

/**
 * Expected Response
 * @param { object } data
 * @param { string } message
 */
export interface userRes extends Response {
    data: {
        _id: string,
        name: string,
        email: string,
        token: string
    },
    message: string
};