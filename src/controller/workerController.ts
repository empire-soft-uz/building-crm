import { Request, Response } from 'express'
import { Worker } from '../models/workerModel'

export const getAllWoker = async (req: Request, res: Response) => {
  const worker = await Worker.find()
  res.status(200).json({ status: '200 ok', data: worker })
}

export const addNewWorker = async (req: Request, res: Response) => {
  const { name, lastname, middlename, phone_number, position } = req.body

  const newWorker = new Worker({
    name,
    lastname,
    middlename,
    phone_number,
    position,
  })
  await newWorker.save()
  res.status(201).json({ status: '201 ok', data: newWorker })
}
