import { ACCENT_CLASSES, EMOJI_MAP } from '../data/categories'
import CategoryTile from './CategoryTile'
import styles       from './CategoryGrid.module.css'

export default function CategoryGrid({ categories, onSelect }) {
  return (
    <div className={styles.grid} role="list">
      {categories.map((cat, i) => {
        // Preserve original index so accent is stable regardless of filter
        const accentClass = ACCENT_CLASSES[i % ACCENT_CLASSES.length]
        return (
          <CategoryTile
            key={cat.id}
            category={cat}
            emoji={EMOJI_MAP[cat.icon] ?? '📄'}
            accentClass={accentClass}
            delay={Math.min(i % 10, 9) * 38}
            onSelect={onSelect}
          />
        )
      })}
    </div>
  )
}
