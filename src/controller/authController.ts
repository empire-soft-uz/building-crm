import { Request, Response } from 'express'
import { User } from '../models'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

//Method POST
// Register new user
export const registerNewUser = async (req: Request, res: Response) => {
  try {
    const { email, lastname, name, surname, password } = req.body
    const user = await User.findOne({ email })
    if (user) return res.status(400).json({ msg: 'The email alerady exists' })

    //password Encritiom
    const hashPassword = bcrypt.hashSync(password, 12)
    const newUser = new User({
      email,
      lastname,
      name,
      surname,
      password: hashPassword,
    })

    // //save mongoDB
    await newUser.save()

    //Then create jsonwebtoken to authentication
    const accesstoken = createAccessToken({ id: newUser._id })
    const refreshtoken = createRefreshToken({ id: newUser._id })

    res.cookie('refreshtoken', refreshtoken, {
      httpOnly: true,
      path: '/user/refresh_token',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    res.json({ accesstoken })
  } catch ({ message }) {
    return res.status(500).json({ msg: message })
  }
}

//Method POST
// Login User
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user: any = await User.findOne({ email })
    if (!user) return res.status(400).json({ msg: 'User does not exists' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ msg: 'Incorrect password' })

    //if login success, create access token and refresh
    const accesstoken = createAccessToken({ id: user._id })
    const refreshtoken = createRefreshToken({ id: user._id })

    res.cookie('refreshtoken', refreshtoken, {
      httpOnly: true,
      path: '/user/refresh_token',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    res.json({ accesstoken })
  } catch ({ message }) {
    res.status(500).json({ msg: message })
  }
}

//Method GET
// Log Out user
export const logOut = async (req: Request, res: Response) => {
  try {
    res.clearCookie('refreshtoken', { path: '/user/refresh_token' })
    return res.json({ msg: 'Logged out' })
  } catch ({ message }) {
    return res.status(500).json({ msg: message })
  }
}

const createAccessToken = (user: any): string => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '10m' })
}
const createRefreshToken = (user: any): string => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '7d' })
}
