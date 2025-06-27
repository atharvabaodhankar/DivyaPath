// backend/models/Aarti.js
import mongoose from 'mongoose'

const AartiSchema = new mongoose.Schema({
  title: String,
  lang: {
    devanagari: String,
    latin: String,
  },
  audio: String,
})

export default mongoose.model('Aarti', AartiSchema)
