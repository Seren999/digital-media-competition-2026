import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CityMap.css'

/*
 * 城市地图页：纵向四时代时间线
 * 对应设计图：assets/design/城市地图_四时代时间线.png
 * 背景复用首页 hero（开封古城黄昏全景），四时代图片已本地化至 public/images/city-map/
 */

const ERAS = [
  {
    id: 'north-song',
    slug: 'northern-song',
    era: '北宋',
    place: '州桥及汴河遗址',
    desc: '北宋汴京的水陆交通枢纽，《清明上河图》中虹桥的历史原型。',
    image: '/images/city-map/era-north-song.jpg',
    alt: '北宋州桥及汴河遗址',
    width: 2240,
    height: 1680,
    meta: '距今约 1000 年',
  },
  {
    id: 'ming',
    slug: 'ming',
    era: '明代',
    place: '周王府与开封城墙',
    desc: '明代周王府邸与开封城墙，见证中原王城的恢宏格局。',
    image: '/images/city-map/era-ming.jpg',
    alt: '明代周王府与开封城墙',
    width: 2240,
    height: 1680,
    meta: '距今约 600 年',
  },
  {
    id: 'modern',
    slug: 'modern',
    era: '近代',
    place: '马道街 / 龙亭 / 河大老校区',
    desc: '近代开封的商业老街、皇家园林与高等学府，中西交融的城市印记。',
    image: '/images/city-map/era-modern.jpg',
    alt: '近代开封老街与历史建筑',
    width: 2240,
    height: 1680,
    meta: '距今约 100 年',
  },
  {
    id: 'contemporary',
    slug: 'contemporary',
    era: '当代',
    place: '州桥遗址博物馆',
    desc: '在州桥遗址上建立的现代博物馆，让千年古桥重见天日。',
    image: '/images/city-map/era-contemporary.jpg',
    alt: '当代州桥遗址博物馆',
    width: 2240,
    height: 1680,
    meta: '2022 年开放',
  },
]

/* 图片加载失败时的占位 */
function EraImage({ src, alt, width, height }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <div className="era-card__fallback" aria-label={`${alt}（图片暂不可用）`} />
  }

  return (
    <img
      className="era-card__img"
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

function CityMap() {
  return (
    <div className="city-map">
      <div className="city-map__inner">
        <h1 className="city-map__title">城市地图</h1>
        <p className="city-map__subtitle">一座城的时光卷宗 · 从北宋到当代</p>

        <div className="era-timeline">
          {ERAS.map((era) => (
            <Link key={era.id} to={`/history/${era.slug}`} className="era-card">
              <EraImage
                src={era.image}
                alt={era.alt}
                width={era.width}
                height={era.height}
              />
              <div className="era-card__body">
                <span className="era-card__era">{era.era}</span>
                <h2 className="era-card__place">{era.place}</h2>
                <p className="era-card__desc">{era.desc}</p>
                <span className="era-card__meta">
                  <svg
                    className="era-card__pin"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s-8-7.58-8-13a8 8 0 0 1 16 0c0 5.42-8 13-8 13z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  {era.meta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CityMap
