import { useEffect, useState } from "react"

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url('/images/devotional-background.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
      <div className="relative z-10 p-6">
        <p className="text-2xl font-devanagari mb-4 text-white drop-shadow-lg">
          श्री गणेशाय नमः <br />
          प्रारंभी विनती करूं गणपति विद्यादयासागरा ।<br />
          अज्ञानत्व हरोनी बुद्धी मति दे आराध्य मोरेश्वरा ।।|
        </p>
        <h1 className="text-5xl font-title mb-8 text-white drop-shadow-lg">Welcome to Divya Path 🙏</h1>
        <p className="text-xl text-white mb-8 drop-shadow-lg">
          Explore a collection of sacred Aartis and devotional content.
        </p>
        <Link
          to="/aartis"
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out shadow-lg"
        >
          View All Aartis
        </Link>
      </div>
    </div>
  )
}

export default Home
