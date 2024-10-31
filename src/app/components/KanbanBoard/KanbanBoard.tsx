'use client'

import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import Column from './Column/Column'

export default function KanbanBoard() {
  let [columns, setColumns] = useState([
    {
      id: uuidv4(),
      tasks: [],
    },
    {
      id: uuidv4(),
      tasks: [],
    },
  ])

  useEffect(() => {
    console.log('This function will fetch data when mounting...')
  }, [])

  return (
    <Flex gap="4" direction="column">
      <div>test</div>
    </Flex>
  )
}
