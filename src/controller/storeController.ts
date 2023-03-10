import { Request, Response } from 'express'
import { StoreProduct, History } from '../models/storeModel'

//Method GET
// get all product in store
export const getAllProduct = async (req: Request, res: Response) => {
  const data = await StoreProduct.find()
  res.status(200).json({ status: '200 ok', data })
}

//Method POST
// add new product in store
export const addNewProduct = async (req: Request, res: Response) => {
  const { name, amount, desc } = req.body
  const data = new StoreProduct({
    name,
    amount,
    desc,
  })
  await data.save()
  res.status(201).json({ status: '201 ok', data })
}

//Method GET
// incer or decr product amount in the store
export const getAllHistory = async (req: Request, res: Response) => {
  const data = await History.find()
  res.status(200).json({ status: '200 ok', data })
}

//Method POST
// incer or decr product amount in the store
export const historyCalc = async (req: Request, res: Response) => {
  const { id, bool, weight } = req.body
  const data: any = await StoreProduct.findById({ _id: id })

  const newHistory = new History({
    name: data?.name,
    date: new Date(),
    amount: weight,
    incOrdec: bool,
  })
  await newHistory.save()

  const updateData = await StoreProduct.findByIdAndUpdate(id, {
    name: data.name,
    amount: bool ? data?.amount + weight : data?.amount - weight,
    desc: data.desc,
  })

  res.status(201).json({ status: '201 ok', data: updateData })
}
