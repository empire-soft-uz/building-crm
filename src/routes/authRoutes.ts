import { Router } from 'express'
import { Auth } from '../controller'

const authRouter = Router()

authRouter.post('/login', Auth.loginUser)
authRouter.post('/signup', Auth.registerNewUser)
authRouter.get('/logout', Auth.logOut)


export { authRouter }
