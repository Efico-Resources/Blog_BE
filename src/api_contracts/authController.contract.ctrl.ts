import { Document } from 'mongoose'

export interface loginReq extends Document {
    email: String,
    password: String,
}

export interface registerReq extends Document {
    name: String,
    email: String,
    password: String,
}