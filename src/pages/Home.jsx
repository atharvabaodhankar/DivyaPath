import { useEffect, useState } from "react"

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="p-6 bg-[#f8f2e0] min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-title mb-8 text-orange-800">Welcome to Divya Path 🙏</h1>
      <p className="text-xl text-gray-700 mb-8">
        Explore a collection of sacred Aartis and devotional content.
      </p>
      <Link
        to="/aartis"
        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out shadow-lg"
      >
        View All Aartis
      </Link>
    </div>
  )
}

export default Home
