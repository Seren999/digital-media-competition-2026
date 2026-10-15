import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import CityMap from './pages/CityMap.jsx'
import CityHub from './pages/city/CityHub.jsx'
import Stories from './pages/Stories.jsx'
import Album from './pages/Album.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city-map" element={<CityMap />} />
          <Route path="/city" element={<CityHub />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/album" element={<Album />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
