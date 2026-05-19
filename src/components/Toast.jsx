import styles from './Toast.module.css'

export default function Toast({ visible }) {
  return (
    <div
      className={`${styles.toast} ${visible ? styles.visible : ''}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      ✓ Skopiowano do schowka
    </div>
  )
}
