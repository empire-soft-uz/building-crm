import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { router } from './routes'
import cokierPreser from 'cookie-parser'

const app: Application = express()

//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//registretion router
app.use(router)

//regiteriation cokies
app.use(cokierPreser())

export { app }
