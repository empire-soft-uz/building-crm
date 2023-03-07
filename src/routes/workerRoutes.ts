import { Router } from 'express'
import { Worker } from '../controller'

const workerRuter = Router()

workerRuter.get('/workers', Worker.getAllWoker)
workerRuter.post('/workers', Worker.addNewWorker)

export { workerRuter }
