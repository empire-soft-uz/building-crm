import { Router } from 'express'
import { Clients } from '../controller'

const clientRouter = Router()

clientRouter.get('/clients', Clients.getAllClients)
clientRouter.get('/clients/:id', Clients.getOneClient)
clientRouter.post('/clients', Clients.addNewClient)

export { clientRouter }
