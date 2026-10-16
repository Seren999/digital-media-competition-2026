import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import CityMap from './pages/CityMap.jsx'
import CityHub from './pages/city/CityHub.jsx'
import Stories from './pages/Stories.jsx'
import Album from './pages/Album.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

/* 临时占位页：内容正在建设中，提供返回入口 */
function UnderConstruction({ title = '内容正在建设中' }) {
  return (
    <section className="page" style={{ textAlign: 'center', padding: '96px 24px' }}>
      <h1 style={{ fontSize: '28px', color: 'var(--text-h)' }}>{title}</h1>
      <p style={{ marginTop: 12, color: 'var(--text-muted)' }}>
        该页面的内容正在规划与建设中，敬请期待。
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginTop: 28,
          padding: '10px 24px',
          background: 'var(--bg-deep)',
          color: '#fff',
          borderRadius: 8,
          fontSize: 14,
        }}
      >
        返回首页
      </Link>
    </section>
  )
}

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
          <Route path="/memory-studio" element={<UnderConstruction title="记忆工坊 · 正在建设中" />} />
          <Route path="/history/:era" element={<UnderConstruction title="时代详情 · 正在建设中" />} />
          <Route path="/landmark/:slug" element={<UnderConstruction title="地标详情 · 正在建设中" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
