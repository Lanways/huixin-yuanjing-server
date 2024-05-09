import express from "express";
import { apiErrorHandler } from "../middleware/error-handler";
import user from './modules/user'

const router = express.Router()

router.use('/api/user', user)
router.use('/', apiErrorHandler)

export default router