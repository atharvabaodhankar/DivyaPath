import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Aartis() {
  const [aartis, setAartis] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/aartis')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        setAartis(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="p-6 text-center">Loading Aartis...</div>
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">Error: {error.message}</div>
  }

  return (
    <div className="p-6 bg-orange-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-orange-800">🕉️ Aarti List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {aartis.map((aarti) => (
          <Link
            to={`/aartis/${aarti._id}`}
            key={aarti._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-orange-600">{aarti.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Aartis
