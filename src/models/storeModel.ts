import { Schema, model } from 'mongoose'
import { IStore } from '../interfaces/store.interface'

const StoreProducts = new Schema<IStore>({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
})


const historyModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  incOrdec: Boolean,
})

export const History = model('History', historyModel)
export const StoreProduct = model<IStore>('StoreProduct', StoreProducts)
