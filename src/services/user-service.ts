import db from "../db/models"
import { callbackType } from "../helpers/helpers"
import { UserOutput } from "../db/models/user"
import { CustomError } from "../middleware/error-handler"

const userService = {
  signUp: async (email: string, password: string, phone: string, cb: callbackType<UserOutput>) => {
    try {
      console.log('email', email)
      const existingUser = await db.User.findOne({ where: { email: email } })
      console.log('exist', existingUser)
      if (existingUser) {
        return cb(new CustomError('user already exists', 409))
      }
      const user = await db.User.create({
        email,
        password,
        phone,
      })
      return cb(null, user)
    } catch (error: unknown) {
      if (error instanceof Error) {
        return cb(error)
      }
    }
  }

}

export default userService