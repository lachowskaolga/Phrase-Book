import PhraseRow from './PhraseRow'
import styles     from './PhraseList.module.css'

export default function PhraseList({ phrases, accentColor, copiedIndex, showEnglish, onCopy }) {
  return (
    <ul className={styles.list} aria-label="Lista zwrotów">
      {phrases.map((phrase, index) => (
        <PhraseRow
          key={`${phrase.pl}-${index}`}
          phrase={phrase}
          index={index}
          accentColor={accentColor}
          isCopied={copiedIndex === index}
          showEnglish={showEnglish}
          onCopy={onCopy}
        />
      ))}
    </ul>
  )
}
