import Hero           from './Hero'
import SearchInput     from './SearchInput'
import CategoryGrid    from './CategoryGrid'
import styles          from './HomeView.module.css'

export default function HomeView({ categories, query, onQueryChange, onSelectCategory }) {
  return (
    <main className={styles.main}>
      <Hero />

      <div className={styles.searchZone}>
        <SearchInput
          value={query}
          onChange={onQueryChange}
          placeholder="Szukaj kategorii…"
          id="home-search"
        />
      </div>

      <div className={styles.sectionRow}>
        <span className={styles.sectionLabel}>Kategorie</span>
        <span className={styles.sectionHint}>tap to explore →</span>
      </div>

      <div className={styles.gridZone}>
        <CategoryGrid
          categories={categories}
          onSelect={onSelectCategory}
        />
        {categories.length === 0 && (
          <p className={styles.noResults}>
            Brak wyników — spróbuj innego słowa kluczowego.
          </p>
        )}
      </div>

      <footer className={styles.footer}>
        <span className={styles.footerBrand}>PHRASEBOOK</span>
        <span className={styles.footerNote}>zwroty na każdą okazję · situational phrases</span>
      </footer>
    </main>
  )
}
