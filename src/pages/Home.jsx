import { useEffect, useState } from "react"

function Home() {
  const [aartis, setAartis] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/aartis")
      .then(res => res.json())
      .then(data => setAartis(data))
      .catch(err => console.error("Error fetching aartis:", err))
  }, [])

  return (
    <div className="p-6 bg-[#f8f2e0] min-h-screen">
      <h1 className="text-4xl font-title mb-6">📜 Divya Path</h1>

      {aartis.map((aarti) => (
        <div
          key={aarti._id}
          className="bg-white p-4 mb-6 shadow-lg rounded-xl max-w-3xl"
        >
          <h2 className="text-2xl font-title mb-2">{aarti.title}</h2>

          <p className="font-devanagari text-xl leading-relaxed mb-2">
            {aarti.lang?.devanagari}
          </p>

          <p className="text-base text-gray-600 italic">
            {aarti.lang?.latin}
          </p>

          {aarti.audio && (
            <audio controls className="mt-4">
              <source src={aarti.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      ))}
    </div>
  )
}

export default Home
