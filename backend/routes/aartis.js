// backend/routes/aartis.js
import express from 'express'
import Aarti from '../models/Aarti.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const aartis = await Aarti.find()
  res.json(aartis)
})

router.post('/', async (req, res) => {
  const newAarti = new Aarti(req.body)
  await newAarti.save()
  res.status(201).json(newAarti)
})

export default router
