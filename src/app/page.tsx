import styles from './page.module.css'
import KanbanBoard from './components/KanbanBoard/KanbanBoard'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <h1>Kanban</h1>
        </div>
        <KanbanBoard />
      </main>
    </div>
  )
}
