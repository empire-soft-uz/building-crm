import { model, Schema } from 'mongoose'
import { IAuth } from '../interfaces/auth.interface'

const Auth = new Schema<IAuth>({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
})

export const User = model<IAuth>('User', Auth)
