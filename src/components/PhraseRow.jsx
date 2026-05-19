import styles from './PhraseRow.module.css'

export default function PhraseRow({ phrase, index, accentColor, isCopied, showEnglish, onCopy }) {
  const handleClick = () => onCopy(phrase.pl, index)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onCopy(phrase.pl, index)
    }
  }

  return (
    <li
      className={`${styles.row} ${isCopied ? styles.copied : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${phrase.pl} — ${phrase.en}. Kliknij aby skopiować.`}
      aria-pressed={isCopied}
    >
      {/* Left colour stripe */}
      <div
        className={styles.stripe}
        style={{ background: accentColor }}
        aria-hidden="true"
      />

      {/* Text body */}
      <div className={`${styles.body} ${showEnglish ? styles.bodyExpanded : ''}`}>
        <span className={styles.num} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={styles.textPl}>{phrase.pl}</span>
        <span className={`${styles.textEn} ${showEnglish ? styles.textEnVisible : ''}`}>
          {phrase.en}
        </span>
      </div>

      {/* Copy button */}
      <div className={styles.action} aria-hidden="true">
        <button
          className={`${styles.copyBtn} ${isCopied ? styles.copyBtnActive : ''}`}
          tabIndex={-1}
        >
          {isCopied ? '✓' : '⎘'}
        </button>
      </div>
    </li>
  )
}
