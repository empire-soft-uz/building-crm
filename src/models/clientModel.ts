import { Schema, model } from 'mongoose'

const clientModel = new Schema({
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
  passport_series: {
    type: String,
    required: true,
  },
  dateofissue: {
    type: String,
    required: true,
  },
  whogiven: {
    type: String,
    required: true,
  },
  stir: {
    type: Number,
    reuqired: true,
  },
  main_phone_number: {
    type: Number,
    required: true,
  },
  seccond_phone_number: {
    type: Number,
    required: true,
  },
})

export const Client = model('Clients', clientModel)
