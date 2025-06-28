import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function AartiDetails() {
  const { id } = useParams()
  const [aarti, setAarti] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showLatin, setShowLatin] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/api/aartis/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        setAarti(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <div className="p-6 text-center">Loading Aarti...</div>
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">Error: {error.message}</div>
  }

  if (!aarti) {
    return <div className="p-6 text-center">Aarti not found</div>
  }

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

      <div className="bg-[#fdf6e3] shadow-lg rounded-xl border border-yellow-900 w-full max-w-5xl p-6 font-devanagari text-lg leading-loose text-gray-800">
        {showLatin ? (
          <div className="italic font-latin">
            {aarti.lang.latin}
          </div>
        ) : (
          <div>
            {aarti.lang.devanagari}
          </div>
        )}
      </div>


    </div>
  )
}

export default AartiDetails
