import { useRef, useEffect, useState, useMemo } from 'react'
import styles from './CategoryTile.module.css'

export default function CategoryTile({ category, emoji, accentClass, delay, onSelect }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [settled, setSettled] = useState(false)

  // Stable random starting position for chaos fly-in
  const chaos = useMemo(() => ({
    '--tx': `${(Math.random() * 2 - 1) * 420}px`,
    '--ty': `${(Math.random() * 2 - 1) * 320}px`,
    '--tr': `${(Math.random() * 2 - 1) * 55}deg`,
  }), [])

  // Scroll-triggered reveal via IntersectionObserver
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect(category)
    }
  }

  return (
    <div
      ref={ref}
      className={`${styles.tile} ${styles[accentClass]} ${visible ? styles.visible : ''} ${settled ? styles.settled : ''}`}
      style={{ ...chaos, animationDelay: `${delay}ms` }}
      onAnimationEnd={() => setSettled(true)}
      role="listitem"
      onClick={() => onSelect(category)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`${category.pl} — ${category.en}, ${category.phrases.length} zwrotów`}
    >
      {/* Top bar (colour strip via ::before in CSS) */}

      <div className={styles.head}>
        <div className={styles.iconWrap}>
          <span className={styles.emoji} aria-hidden="true">{emoji}</span>
        </div>
        <div className={styles.arrow} aria-hidden="true">→</div>
      </div>

      <p className={styles.namePl}>{category.pl}</p>
      <p className={styles.nameEn}>{category.en}</p>

      <div className={styles.foot}>
        <span className={styles.count}>{category.phrases.length} zwrotów</span>
        <span className={styles.lang}>PL·EN</span>
      </div>
    </div>
  )
}
