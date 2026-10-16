import { NavLink } from 'react-router-dom'
import './Navbar.css'

/* 城忆顶部主导航（7个入口，路由地址与 App.jsx 保持一致） */
const mainNav = [
  { to: '/', label: '首页' },
  { to: '/city-map', label: '城市时光' },
  { to: '/city', label: '走进开封' },
  { to: '/stories', label: '城市故事' },
  { to: '/album', label: '记忆相册' },
  { to: '/memory-studio', label: '记忆工坊' },
  { to: '/about', label: '关于我们' },
]

function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <div className="nav-links">
          {mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <NavLink to="/" className="nav-logo">城忆</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
