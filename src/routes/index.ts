import { Router } from 'express'
import { authRouter } from './authRoutes'
import { workerRuter } from './workerRoutes'

const router = Router()

//api for Auth
router.use('/api', authRouter)
//api for Workers
router.use('/api', workerRuter)

export { router }
