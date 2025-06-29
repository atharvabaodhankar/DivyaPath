import mongoose from 'mongoose'

const AartiSchema = new mongoose.Schema({
  title: String,
  lang: {
    devanagari: String,
    latin: String,
  },

})

export default mongoose.model('Aarti', AartiSchema)
