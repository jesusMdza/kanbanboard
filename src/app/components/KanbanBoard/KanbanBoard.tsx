'use client'

import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import { Flex, For } from '@chakra-ui/react'
import { ColumnType } from '@/app/shared/types'
import Column from './Column/Column'

export default function KanbanBoard() {
  let [columns, setColumns] = useState<ColumnType[]>([
    {
      id: uuidv4(),
      title: 'Column 1',
      tasks: [
        {
          id: uuidv4(),
          title: 'Task 1',
        },
        {
          id: uuidv4(),
          title: 'Task 2',
        },
        {
          id: uuidv4(),
          title: 'Task 3',
        },
        {
          id: uuidv4(),
          title: 'Task 4',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Column 2',
      tasks: [
        {
          id: uuidv4(),
          title: 'Task 1',
        },
        {
          id: uuidv4(),
          title: 'Task 2',
        },
        {
          id: uuidv4(),
          title: 'Task 3',
        },
        {
          id: uuidv4(),
          title: 'Task 4',
        },
      ],
    },
  ])

  useEffect(() => {
    console.log('This function will fetch data when mounting...')
  }, [])

  return (
    <Flex gap="4" direction="row">
      <For each={columns}>
        {(column) => <Column title={column.title} tasks={column.tasks ?? []} />}
      </For>
    </Flex>
  )
}
