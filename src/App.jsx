import './App.css'
import HomePage from './pages/home_page'
import { Routes, Route } from 'react-router-dom'
import FavoritesPage from './pages/favorites_page'
import NavBar from './components/nav_bar'

function App() {
  return (
    <div>
      <NavBar />
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
