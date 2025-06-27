import { Link } from 'react-router-dom'
import aartiData from '../data/aartis.json'

function Aartis() {
  return (
    <div className="p-6 bg-orange-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-orange-800">🕉️ Aarti List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {aartiData.map((aarti) => (
          <Link
            to={`/aartis/${aarti.id}`}
            key={aarti.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-orange-600">{aarti.title}</h3>
            <p className="text-gray-600 mt-2">{aarti.lang.devanagari.slice(0, 30)}...</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Aartis
