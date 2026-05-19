import { useState, useCallback } from 'react'
import { CATEGORIES, ACCENT_CLASSES } from '../data/categories'

/**
 * Central state manager for the phrasebook app.
 * Keeps all business logic out of components.
 */
export function usePhrasebook() {
  const [activeCategory, setActiveCategory]   = useState(null)
  const [homeQuery,      setHomeQuery]         = useState('')
  const [phraseQuery,    setPhraseQuery]        = useState('')
  const [copiedIndex,    setCopiedIndex]        = useState(null)
  const [toastVisible,   setToastVisible]       = useState(false)
  const [showEnglish,    setShowEnglish]        = useState(false)

  // ── Derived data ──────────────────────────────────────────

  /** Categories filtered by the home search query */
  const filteredCategories = CATEGORIES.filter((cat) => {
    if (!homeQuery.trim()) return true
    const q = homeQuery.toLowerCase()
    return cat.pl.toLowerCase().includes(q) || cat.en.toLowerCase().includes(q)
  })

  /** Accent class for the currently active category */
  const activeCategoryAccent = activeCategory
    ? ACCENT_CLASSES[CATEGORIES.findIndex((c) => c.id === activeCategory.id) % ACCENT_CLASSES.length]
    : null

  /** Phrases filtered by the phrase search query */
  const filteredPhrases = activeCategory
    ? activeCategory.phrases.filter((p) => {
        if (!phraseQuery.trim()) return true
        const q = phraseQuery.toLowerCase()
        return p.pl.toLowerCase().includes(q) || p.en.toLowerCase().includes(q)
      })
    : []

  // ── Actions ───────────────────────────────────────────────

  const openCategory = useCallback((cat) => {
    setActiveCategory(cat)
    setPhraseQuery('')
    setShowEnglish(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const closeCategory = useCallback(() => {
    setActiveCategory(null)
    setPhraseQuery('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const copyPhrase = useCallback((text, index) => {
    navigator.clipboard.writeText(text).catch(() => {})
    setCopiedIndex(index)
    setToastVisible(true)

    setTimeout(() => setCopiedIndex(null), 1900)
    setTimeout(() => setToastVisible(false), 1700)
  }, [])

  const toggleEnglish = useCallback(() => {
    setShowEnglish((prev) => !prev)
  }, [])

  return {
    // state
    activeCategory,
    homeQuery,
    phraseQuery,
    copiedIndex,
    toastVisible,
    showEnglish,
    // derived
    filteredCategories,
    activeCategoryAccent,
    filteredPhrases,
    // actions
    openCategory,
    closeCategory,
    setHomeQuery,
    setPhraseQuery,
    copyPhrase,
    toggleEnglish,
  }
}
