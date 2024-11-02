import styles from './page.module.css'
import KanbanBoard from './components/KanbanBoard/KanbanBoard'
import { Text, Center } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Center>
          <Text textStyle="6xl">Kan</Text>
        </Center>
        <KanbanBoard />
      </main>
    </div>
  )
}
