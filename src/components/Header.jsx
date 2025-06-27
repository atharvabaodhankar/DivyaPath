import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-orange-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          🙏 BhaktiVerse
        </Link>
        <nav className="flex gap-4 text-sm sm:text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:underline ${isActive ? 'font-bold underline' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/aartis"
            className={({ isActive }) =>
              `hover:underline ${isActive ? 'font-bold underline' : ''}`
            }
          >
            Aartis
          </NavLink>
          {/* Add more links here like Pothis if needed */}
        </nav>
      </div>
    </header>
  )
}

export default Header
