import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CityHub.css'

/*
 * 走进开封页（路由 /city）
 * 对应设计图：assets/design/走进开封_择地.png
 * 展示开封 4 个历史文化地标，点击进入地标详情页 /landmark/:slug
 */

const LANDMARKS = [
  {
    id: 'qingming',
    slug: 'qingming-riverside',
    name: '清明上河园',
    image: '/images/landmark/qingming.jpg',
    alt: '清明上河园',
    description: '以《清明上河图》为蓝本复原的北宋市井园区。',
  },
  {
    id: 'daxiangguo',
    slug: 'daxiangguo',
    name: '大相国寺',
    image: '/images/landmark/daxiangguo.jpg',
    alt: '大相国寺',
    description: '千年皇家寺院，北宋汴京的佛事与市集中心。',
  },
  {
    id: 'kaifengfu',
    slug: 'kaifengfu',
    name: '开封府',
    image: '/images/landmark/kaifengfu.jpg',
    alt: '开封府',
    description: '包公理政之地，府衙文化与清廉记忆的坐标。',
  },
  {
    id: 'gulou',
    slug: 'gulou-night-market',
    name: '鼓楼夜市',
    image: '/images/landmark/gulou.jpg',
    alt: '鼓楼夜市',
    description: '入夜后的市井烟火，小吃与叫卖声汇成的街巷。',
  },
]

/* 图片加载失败时显示占位：图标 + 地标名称，避免破图 */
function LandmarkImage({ src, alt, name }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="landmark-card__fallback" aria-label={`${alt}（图片暂不可用）`}>
        <svg
          className="landmark-card__fallback-icon"
          viewBox="0 0 24 24"
          width="40"
          height="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="landmark-card__fallback-text">{name}</span>
      </div>
    )
  }

  return (
    <img
      className="landmark-card__img"
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

function CityHub() {
  return (
    <div className="city-hub">
      <div className="city-hub__inner">
        <h1 className="city-hub__title">走进开封</h1>
        <p className="city-hub__subtitle">择一处地标，翻阅属于它的记忆</p>

        <div className="landmark-grid">
          {LANDMARKS.map((landmark) => (
            <Link
              key={landmark.id}
              to={`/landmark/${landmark.slug}`}
              className="landmark-card"
              aria-label={`进入${landmark.name}的故事`}
            >
              <div className="landmark-card__media">
                <LandmarkImage
                  src={landmark.image}
                  alt={landmark.alt}
                  name={landmark.name}
                />
              </div>
              <div className="landmark-card__body">
                <h2 className="landmark-card__name">{landmark.name}</h2>
                <p className="landmark-card__desc">{landmark.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CityHub
