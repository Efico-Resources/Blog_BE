import { Schema, model, Document } from 'mongoose';
import { isEmail } from '../utils/validator';
import { genSalt, hash } from 'bcrypt';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is already in use'],
        lowercase: true,
        validate: [(value: string) => { return isEmail(value) }, 'Invalid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [8, 'Password cannot be less than 8 characters'],
        maxLength: [20, 'Password cannot be greater than 20 characters']
    },
    phone: Number,
    date: {
        type: Date, 
        default: Date.now,
    }
});

interface IUser {
    email: string;
    password: string;
    name: string;
  }

userSchema.pre<IUser & Document>('save', async function (next) {
    this.password = await hash(this.password, await genSalt());
    next();
});

userSchema.set('toJSON', {
    transform: function (doc: any, ret: any, opt: any) {
        delete ret['password']
        return ret
    }
})

export const User = model('User', userSchema);
