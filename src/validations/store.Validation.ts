import Joi from 'joi'
import { IValid } from '../interfaces/auth.interface'
import { IStore } from '../interfaces/store.interface'

class StoreValidate {
  static AddNewStore(data: IStore): IValid {
    const schema = Joi.object({
      name: Joi.string().required(),
      amount: Joi.number().required(),
      desc: Joi.string().required(),
    })

    try {
      const res = schema.validate(data)

      if (res.error)
        return {
          status: false,
          msg: res.error.message,
        }
      return {
        status: true,
        msg: 'success',
      }
    } catch ({ message }) {
      return {
        status: false,
        msg: message,
      }
    }
  }
  static AddNewHistory(data: any): IValid {
    const schema = Joi.object({
      id: Joi.string().required(),
      bool: Joi.boolean().required,
      weight: Joi.string().required(),
    })
    try {
      const res = schema.validate(data)

      if (res.error)
        return {
          status: false,
          msg: res.error.message,
        }
      return {
        status: true,
        msg: 'success',
      }
    } catch ({ message }) {
      return {
        status: false,
        msg: message,
      }
    }
  }
}

export { StoreValidate }
