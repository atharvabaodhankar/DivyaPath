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

router.post("/bulk", async (req, res) => {
  try {
    const aartis = req.body;
    const result = await Aarti.insertMany(aartis);
    res.status(201).json({ message: "✅ Aartis added", inserted: result.length });
  } catch (error) {
    console.error("❌ Bulk insert error:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API is healthy' });
});


router.get('/:id', async (req, res) => {
  try {
    const aarti = await Aarti.findById(req.params.id)
    if (!aarti) {
      return res.status(404).json({ message: 'Aarti not found' })
    }
    res.json(aarti)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
