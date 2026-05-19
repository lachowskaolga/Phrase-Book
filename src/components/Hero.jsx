import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Eyebrow pills */}
        <div className={styles.eyebrow}>
          <span className={`${styles.pill} ${styles.pillBlue}`}>
            <span className={styles.dot} />
            Situational Phrases
          </span>
          <span className={`${styles.pill} ${styles.pillRose}`}>PL · EN</span>
        </div>

        {/* Syne / Broadcast headline */}
        <h1 className={styles.headline}>
          SŁOWA<br />
          NA&nbsp;<span className={styles.wRose}>KAŻDĄ</span><br />
          <span className={styles.wBlue}>OKAZJĘ.</span>
        </h1>

        {/* Space Grotesk subtitle */}
        <p className={styles.subline}>Words for every occasion.</p>

        <p className={styles.desc}>
          Wybierz kategorię i odkryj gotowe zwroty do codziennych sytuacji
          — po polsku i angielsku.
        </p>

        {/* Stat chips */}
        <div className={styles.chips}>
          <span className={`${styles.chip} ${styles.chipRose}`}>💬 680+ zwrotów</span>
          <span className={`${styles.chip} ${styles.chipBlue}`}>🌍 PL · EN</span>
          <span className={`${styles.chip} ${styles.chipGold}`}>📂 21 kategorii</span>
        </div>
      </div>
    </section>
  )
}
