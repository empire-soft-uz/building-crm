import { Request, Response } from 'express'
import { Client } from '../models/clientModel'

//Method GET
//get all clients
export const getAllClients = async (req: Request, res: Response) => {
  const data = await Client.find()
  res.status(200).json({ status: '200ok', data })
}

//Method GET
//get one client
export const getOneClient = async (req: Request, res: Response) => {
  const { id } = req.params
  const data = await Client.find({ _id: id })
  res.status(200).json({ status: '200ok', data })
}

//Method POST
//Add new client
export const addNewClient = async (req: Request, res: Response) => {
  const {
    name,
    lastname,
    middlename,
    passport_series,
    dateofissue,
    whogiven,
    stir,
    main_phone_number,
    seccond_phone_number,
  } = req.body

  const newClient = new Client({
    name,
    lastname,
    middlename,
    passport_series,
    dateofissue,
    whogiven,
    stir,
    main_phone_number,
    seccond_phone_number,
  })
  await newClient.save()
  res.status(201).json({ status: '201 ok', data: newClient })
}
