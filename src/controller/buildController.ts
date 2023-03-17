import { Request, Response } from 'express'
import { MainBuild, EachBuild, EachFloor, AddFloor } from '../models/buildModel'

class Build {
  //Mathod GET
  //get all build
  static getAllBuild = async (req: Request, res: Response) => {
    const data = await MainBuild.find()
    res.status(200).json({ status: '200 ok', data })
  }

  //Method POST
  // add new build
  static addNewBuild = async (req: Request, res: Response) => {
    const { name, adress, desc, from, to } = req.body
    const newBuild = new MainBuild({
      name,
      adress,
      desc,
      from,
      to,
    })
    await newBuild.save()
    res.status(201).json({ msg: '201 ok', data: newBuild })
  }

  //Method GET
  // get all new each build
  static getAllNewEachBuild = async (req: Request, res: Response) => {
    const data = await EachBuild.find()
    res.status(200).json({ status: '200 ok', data })
  }

  //Method POST
  // add new each build
  static addNewEachBuild = async (req: Request, res: Response) => {
    const { floor, apartment, elevator, enterance, repair } = req.body
    const newEachBuild = new EachBuild({
      floor,
      apartment,
      elevator,
      enterance,
      repair,
    })
    await newEachBuild.save()
    res.status(201).json({ status: '201 ok', data: newEachBuild })
  }

  //Method GET
  // get all new each floor build
  static getAllEachFloorBuild = async (req: Request, res: Response) => {
    const data = await EachFloor.find()
    res.status(200).json({ status: '200 ok', data })
  }

  //Method POST
  // add new each floor build
  static addEachFloorBuild = async (req: Request, res: Response) => {
    const { number, apartment, numeration } = req.body
    const newEachFloor = new EachFloor({
      number,
      apartment,
      numeration,
    })
    await newEachFloor.save()
    res.status(201).json({ status: '201 ok', data: newEachFloor })
  }

  //Method GET
  // get all new each floor build
  static getAllFloor = async (req: Request, res: Response) => {
    const data = await AddFloor.find()
    res.status(200).json({ status: '200 ok', data })
  }

  //Method POST
  // add new each floor build
  static addFloor = async (req: Request, res: Response) => {
    const { number, place, price, picture, repair } = req.body
    const newFloor = new AddFloor({ number, place, price, picture, repair })
    await newFloor.save()
    res.status(201).json({ status: '201 ok', data: newFloor })
  }
}

export default Build
