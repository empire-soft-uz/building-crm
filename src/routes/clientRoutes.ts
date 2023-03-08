import { Router } from 'express'
import { Clients } from '../controller'

const clientRouter = Router()

clientRouter.get('/all-client', Clients.getAllClients)

export { clientRouter }
