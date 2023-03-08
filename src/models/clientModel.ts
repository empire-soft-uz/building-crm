import { Schema, model } from 'mongoose'

const clientModel = new Schema({})

export const Client = model('Clients', clientModel)
