import { Router } from 'express'
import { authRouter } from './authRoutes'
import { workerRuter } from './workerRoutes'
import { storeRouter } from './storeRoutes'
import { clientRouter } from './clientRoutes'
const router = Router()

//api for Auth
router.use('/api', authRouter)

//api for Workers
router.use('/api', workerRuter)

//api for product in store
router.use('/api', storeRouter)

//api for clients
router.use('/api', clientRouter)

export { router }
