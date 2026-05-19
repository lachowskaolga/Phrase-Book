import styles from './Navbar.module.css'

export default function Navbar({ activeCategory, onBack }) {
  return (
    <nav className={styles.nav}>
      <button
        className={`${styles.backBtn} ${activeCategory ? styles.backBtnVisible : ''}`}
        onClick={onBack}
        aria-label="Wróć do kategorii"
      >
        ←
      </button>

      <span
        className={styles.brand}
        onClick={activeCategory ? onBack : undefined}
        role={activeCategory ? 'button' : undefined}
        tabIndex={activeCategory ? 0 : undefined}
        onKeyDown={activeCategory ? (e) => e.key === 'Enter' && onBack() : undefined}
      >
        phrase<span className={styles.brandAccent}>.</span>book
      </span>

      <div className={styles.center}>
        {activeCategory && (
          <span className={styles.crumb}>{activeCategory.pl}</span>
        )}
      </div>

      <span className={styles.meta}>
        {activeCategory
          ? `${activeCategory.phrases.length} zwrotów`
          : '21 kategorii'}
      </span>
    </nav>
  )
}
