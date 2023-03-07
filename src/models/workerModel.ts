import { Schema, model } from 'mongoose'
import { IWorker } from '../interfaces/workers.interface'

const Workers = new Schema<IWorker>({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
})

export const Worker = model<IWorker>('Workers', Workers)
