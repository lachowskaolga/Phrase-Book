import { usePhrasebook } from './hooks/usePhrasebook'
import Navbar           from './components/Navbar'
import HomeView         from './components/HomeView'
import PhraseView       from './components/PhraseView'
import Toast            from './components/Toast'
import styles           from './App.module.css'

export default function App() {
  const phrasebook = usePhrasebook()

  return (
    <div className={styles.layout}>
      <Navbar
        activeCategory={phrasebook.activeCategory}
        onBack={phrasebook.closeCategory}
      />

      {phrasebook.activeCategory ? (
        <PhraseView
          category={phrasebook.activeCategory}
          accentClass={phrasebook.activeCategoryAccent}
          phrases={phrasebook.filteredPhrases}
          allPhrases={phrasebook.activeCategory.phrases}
          query={phrasebook.phraseQuery}
          onQueryChange={phrasebook.setPhraseQuery}
          copiedIndex={phrasebook.copiedIndex}
          showEnglish={phrasebook.showEnglish}
          onToggleEnglish={phrasebook.toggleEnglish}
          onCopy={phrasebook.copyPhrase}
        />
      ) : (
        <HomeView
          categories={phrasebook.filteredCategories}
          query={phrasebook.homeQuery}
          onQueryChange={phrasebook.setHomeQuery}
          onSelectCategory={phrasebook.openCategory}
        />
      )}

      <Toast visible={phrasebook.toastVisible} />
    </div>
  )
}
