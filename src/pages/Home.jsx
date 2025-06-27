import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 text-center p-6">
      <h1 className="text-4xl font-bold text-orange-700 mb-4">🙏 Welcome to BhaktiVerse</h1>
      <p className="text-lg mb-6">Explore Hindu Aartis and Pothis in Devanagari and Latin scripts</p>
      <Link
        to="/aartis"
        className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition"
      >
        Browse Aartis
      </Link>
    </div>
  )
}

export default Home
