import { useParams } from 'react-router-dom'
import aartiData from '../data/aartis.json'
import { useState } from 'react'

function AartiDetails() {
  const { id } = useParams()
  const aarti = aartiData.find((a) => a.id === id)
  const [showLatin, setShowLatin] = useState(false)

  if (!aarti) return <div className="p-6">Aarti not found</div>

  return (
    <div className="min-h-screen bg-[#f3e5ab] p-6 flex flex-col items-center">
      <h2 className="text-4xl font-title text-center text-orange-900 mb-6">
        📖 {aarti.title}
      </h2>

      <div className="mb-4">
        <button
          onClick={() => setShowLatin(!showLatin)}
          className="bg-orange-700 text-white px-4 py-2 rounded-full shadow hover:bg-orange-800"
        >
          Show {showLatin ? 'Devanagari' : 'Latin'} Script
        </button>
      </div>

      <div className="bg-[#fdf6e3] shadow-lg rounded-xl border border-yellow-900 w-full max-w-5xl grid md:grid-cols-2 gap-4 p-6 font-devanagari text-lg leading-loose text-gray-800">
        <div className="border-r border-yellow-400 pr-4">
          {aarti.lang.devanagari}
        </div>
        <div className="pl-4 italic font-latin">
          {aarti.lang.latin}
        </div>
      </div>

      <audio
        controls
        className="mt-6 w-full max-w-md shadow-md border border-orange-700 rounded"
      >
        <source src={aarti.audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default AartiDetails
