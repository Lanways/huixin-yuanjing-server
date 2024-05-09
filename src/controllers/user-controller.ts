import userService from "../services/user-service"
import { Request, Response, NextFunction } from "express"
import { userSchema } from "../schemas/userSchema"
import { ResponseData } from "../helpers/helpers"

const userController = {
  signup: (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = userSchema.validate(req.body)
    if (error) {
      return res.status(400).json(ResponseData('400', error.details[0].message, null))
    }
    const { email, password, phone } = value
    userService.signUp(email, password, phone, (error, data) => error ? next(error) : res.status(200).json(ResponseData('200', 'OK', data)))
  }
}

export default userController