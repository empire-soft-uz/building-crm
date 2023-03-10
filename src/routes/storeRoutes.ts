import { Router } from 'express'
import { Store } from '../controller'
const storeRouter = Router()

storeRouter.get('/products', Store.getAllProduct)
storeRouter.post('/products', Store.addNewProduct)

storeRouter.get('/histories', Store.getAllHistory)
storeRouter.post('/incr-decr', Store.historyCalc)

export { storeRouter }
//REST API is not found
