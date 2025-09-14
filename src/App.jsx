import './App.css'
import HomePage from './pages/home_page'
import { Routes, Route } from 'react-router-dom'
import FavoritesPage from './pages/favorites_page'

function App() {
  return (
    <div>
      <h1>Movie Finder App</h1>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
