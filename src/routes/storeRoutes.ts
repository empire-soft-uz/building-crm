import { Router } from 'express'
import { Store } from '../controller'
const storeRouter = Router()

storeRouter.get('/all-products', Store.getAllProduct)
storeRouter.post('/all-products', Store.addNewProduct)

storeRouter.get('/all-history', Store.getAllHistory)
storeRouter.post('/incr-decr/:id', Store.historyCalc)

export { storeRouter }
