import { Schema, model } from 'mongoose'

const builSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  from: {
    type: Number,
    required: true,
  },
  to: {
    type: Number,
    required: true,
  },
})

const eachBuildSchema = new Schema({
  floor: {
    type: Number,
    required: true,
  },
  apartment: {
    type: Number,
    required: true,
  },
  elevator: {
    type: Number,
    required: true,
  },
  enterance: {
    type: Number,
    required: true,
  },
  repair: {
    type: Boolean,
    required: true,
  },
})

const eachFloorSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  apartment: {
    type: Number,
    required: true,
  },
  numeration: {
    type: Number,
    required: true,
  },
})

const addFloorSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  place: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  repair: {
    type: Boolean,
    required: true,
  },
})
