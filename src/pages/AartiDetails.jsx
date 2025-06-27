import { useParams } from 'react-router-dom'
import aartiData from '../data/aartis.json'
import { useState } from 'react'

function AartiDetails() {
  const { id } = useParams()
  const aarti = aartiData.find((a) => a.id === id)

  const [showLatin, setShowLatin] = useState(false)

  if (!aarti) return <div className="p-6">Aarti not found</div>

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <h2 className="text-3xl font-bold text-orange-800 text-center mb-4">
        {aarti.title}
      </h2>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowLatin(!showLatin)}
          className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition"
        >
          Show {showLatin ? 'Devanagari' : 'Latin'} Script
        </button>
      </div>

      <pre className="whitespace-pre-wrap text-lg text-gray-800 bg-white p-4 rounded-lg shadow max-w-3xl mx-auto mb-6">
        {showLatin ? aarti.lang.latin : aarti.lang.devanagari}
      </pre>

      <div className="text-center">
        <audio controls className="w-full max-w-md mx-auto">
          <source src={aarti.audio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  )
}

export default AartiDetails
