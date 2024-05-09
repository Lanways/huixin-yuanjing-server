import express from "express";
import dotenv from 'dotenv'
import { getEnvVariable } from "./helpers/checkType";
import router from "./routes";
import morgan from 'morgan'

dotenv.config()
const app = express()
const PORT = getEnvVariable('PORT')
const ENV = getEnvVariable('NODE_ENV')
console.log('env is', ENV)
app.get('/', (req, res, next) => {
  res.send('hello')
})

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})

export default app