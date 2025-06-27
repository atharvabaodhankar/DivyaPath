// backend/index.js
import express from 'express'
import connectDB from './db.js'
import aartiRoutes from './routes/aartis.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

connectDB()

app.use('/api/aartis', aartiRoutes)

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000')
})
