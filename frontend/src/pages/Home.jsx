import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

/* 卡片图片加载失败时的占位，避免浏览器出现破图图标 */
function MemoryImage({ src, alt, width, height }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="memory-card__fallback"
        role="img"
        aria-label={`${alt}（图片暂不可用）`}
      >
        <span className="memory-card__fallback-text">{alt}</span>
      </div>
    )
  }

  return (
    <img
      className="memory-card__img"
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

/* 右侧两张记忆卡片（图片已本地化至 frontend/public/images/home/） */
const MEMORY_CARDS = [
  {
    id: 'old-traces',
    images: [
      {
        src: '/images/home/old-street.jpg',
        alt: '斑驳旧巷与老砖墙',
        width: 1216,
        height: 912,
      },
    ],
    caption: '回望旧迹，寻觅城市岁月印记',
  },
  {
    id: 'renewal',
    images: [
      {
        src: '/images/home/old-house.jpg',
        alt: '旧时民居门面',
        width: 1024,
        height: 1024,
      },
      {
        src: '/images/home/city-night.jpg',
        alt: '当代城市夜景',
        width: 1024,
        height: 1024,
      },
    ],
    caption: '新旧更迭，留住一城人间烟火',
  },
]

function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero__inner">
          <div className="home-hero__text">
            <h1 className="home-hero__title">城市记忆｜一座城的时光卷宗</h1>
            <p className="home-hero__subtitle">拾藏街巷烟火，镌刻岁月过往</p>
            <Link to="/city-map" className="home-hero__cta">
              立即进入
            </Link>
          </div>

          <div className="home-hero__cards">
            {MEMORY_CARDS.map((card) => (
              <article key={card.id} className="memory-card">
                <div className="memory-card__media">
                  {card.images.map((image) => (
                    <MemoryImage
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                    />
                  ))}
                </div>
                <p className="memory-card__caption">
                  <span className="memory-card__heart" aria-hidden="true">♥</span>
                  {card.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-subscribe">
        <div className="home-subscribe__inner">
          <span className="home-subscribe__icon" aria-hidden="true">▶</span>
          <p className="home-subscribe__text">订阅我们，一起收藏不同城市的时光故事</p>
        </div>
      </section>
    </div>
  )
}

export default Home
