import express from "express";
import dotenv from 'dotenv'
import { getEnvVariable } from "./helpers/checkType";

dotenv.config()
const app = express()
const PORT = getEnvVariable('PORT')
const ENV = getEnvVariable('NODE_ENV')
console.log('env is', ENV)
app.get('/', (req, res, next) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})