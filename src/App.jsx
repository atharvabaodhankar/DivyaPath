import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Aartis from './pages/Aartis'
import AartiDetails from './pages/AartiDetails'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aartis" element={<Aartis />} />
        <Route path="/aartis/:id" element={<AartiDetails />} />
      </Routes>
    </>
  )
}

export default App