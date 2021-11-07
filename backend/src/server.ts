import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/user', (req, res) => {
  res.json({ message: 'hi' })
})

app.get('/users/:id', (req, res) => {
  res.json({ message: 'hi', id: req.params.id })
})

app.listen(3333, () => {
  console.log('Running!')
})
