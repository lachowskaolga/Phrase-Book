import { EMOJI_MAP } from '../data/categories'
import SearchInput   from './SearchInput'
import PhraseList    from './PhraseList'
import styles        from './PhraseView.module.css'

export default function PhraseView({
  category,
  accentClass,
  phrases,
  allPhrases,
  query,
  onQueryChange,
  copiedIndex,
  showEnglish,
  onToggleEnglish,
  onCopy,
}) {
  const emoji = EMOJI_MAP[category.icon] ?? '📄'

  // Derive the CSS accent colour for the stripe
  const accentVarMap = {
    'accent-rose':   'var(--rose)',
    'accent-blue':   'var(--blue)',
    'accent-gold':   'var(--gold)',
    'accent-coral':  'var(--coral)',
    'accent-mint':   'var(--mint)',
    'accent-violet': 'var(--violet)',
  }
  const accentColor   = accentVarMap[accentClass] ?? 'var(--rose)'
  const accentBg      = accentColor.replace('var(--', 'var(--').replace(')', '-bg)')

  return (
    <main className={styles.main} style={{ '--ph-accent': accentColor, '--ph-accent-bg': accentBg }}>

      {/* ── Header ── */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.top}>
            <div
              className={styles.iconWrap}
              style={{ background: accentBg }}
              aria-hidden="true"
            >
              {emoji}
            </div>
            <div className={styles.titles}>
              <h1 className={styles.titlePl}>{category.pl}</h1>
              <p  className={styles.titleEn}>{category.en}</p>
            </div>
          </div>

          <div className={styles.badges}>
            <span className={styles.badgeLang}>PL · EN</span>
            <span className={styles.badgeCount}>{allPhrases.length} zwrotów</span>
            <span className={styles.badgeTip}>Tap to copy</span>
          </div>
        </div>
      </header>

      {/* ── EN toggle (mobile only) ── */}
      <div className={styles.enStrip}>
        <span className={styles.enLabel}>Pokaż angielski</span>
        <button
          className={`${styles.toggle} ${showEnglish ? styles.toggleOn : ''}`}
          onClick={onToggleEnglish}
          aria-label="Pokaż tłumaczenie angielskie"
          aria-pressed={showEnglish}
        />
      </div>

      {/* ── Search ── */}
      <div className={styles.searchBar}>
        <SearchInput
          value={query}
          onChange={onQueryChange}
          placeholder="Szukaj zwrotu · Search phrase…"
          id="phrase-search"
        />
      </div>

      {/* ── List ── */}
      {phrases.length > 0 ? (
        <PhraseList
          phrases={phrases}
          accentColor={accentColor}
          copiedIndex={copiedIndex}
          showEnglish={showEnglish}
          onCopy={onCopy}
        />
      ) : (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🔎</span>
          <p className={styles.emptyText}>Brak wyników · No results found.</p>
        </div>
      )}
    </main>
  )
}
