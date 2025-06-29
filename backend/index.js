import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
import connectDB from './db.js'
import aartiRoutes from './routes/aartis.js'
import cors from 'cors'

const app = express()
app.use(cors({
  origin: [process.env.FRONTEND_URL || 'http://localhost:5173'],
  credentials: true,
}))
app.use(express.json())

connectDB()

app.use('/api/aartis', aartiRoutes)

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000')
})
