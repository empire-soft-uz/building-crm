import mongoose from 'mongoose'
import { app } from './app'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 4040
const PASSWORD = process.env.MONGOOSE_PASSWORD

;(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://authUser:${PASSWORD}@cluster0.apnc6ah.mongodb.net/?retryWrites=true&w=majority`,
    )
    console.log('Connect to db')
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch ({ message }) {
    console.log(`error => ${message}`)
  }
})()
