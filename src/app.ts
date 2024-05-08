import express from "express";
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res, next) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})