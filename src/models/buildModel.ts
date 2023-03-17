import { Schema, model } from 'mongoose'

const buildSchema = new Schema({
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

export const MainBuild = model('MainBuild', buildSchema)

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

export const EachBuild = model('EachBuild', eachBuildSchema)

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

export const EachFloor = model('EachFloor', eachFloorSchema)

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

export const AddFloor = model('AddFloor', addFloorSchema)
