import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function AartiDetails() {
  const { id } = useParams()
  const [aarti, setAarti] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showLatin, setShowLatin] = useState(false)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/aartis/${id}`)
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
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center pt-12 pb-6"
      style={{
        backgroundImage: `url('/images/wooden-floor-background.jpg')`,
      }}
    >

      <h2 className="text-4xl font-title text-center text-white mb-6 relative z-10 drop-shadow-lg">
        📖 {aarti.title}
      </h2>

      <div className="mb-4">
        <button
          onClick={() => setShowLatin(!showLatin)}
          className="bg-orange-700 text-white px-4 py-2 rounded-full shadow hover:bg-orange-800 relative z-10"
        >
          Show {showLatin ? 'Devanagari' : 'Latin'} Script
        </button>
      </div>

      <div className="rounded-xl w-full max-w-5xl p-6 font-devanagari text-lg leading-loose text-white relative z-10">
        {showLatin ? (
          <div className="italic font-latin">            {aarti.lang.latin.split('।।|').map((stanza, index) => (
              <p key={index} className="mb-2 last:mb-0 text-center " dangerouslySetInnerHTML={{ __html: stanza.trim().replace(/\n/g, '<br />') }}></p>
            ))}
          </div>
        ) : (
          <div>
            {aarti.lang.devanagari.split('।।|').map((stanza, index) => (
              <p key={index} className="mb-2 last:mb-0 font-devanagari text-center" dangerouslySetInnerHTML={{ __html: stanza.trim().replace(/\n/g, '<br />') }}></p>
            ))}
          </div>
        )}
      </div>


    </div>
  )
}

export default AartiDetails
