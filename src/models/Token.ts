import { Schema, model, Document } from 'mongoose';

const tokenSchema = new Schema({
    value: {
        type: String,
        required: [true, 'Cannot store empty token'],
    },
    date: {
        type: Date, 
        default: Date.now,
    }
});

export const Token = model('Token', tokenSchema);
