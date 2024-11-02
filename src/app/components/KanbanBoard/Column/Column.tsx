'use client'
import { TaskType } from '@/app/shared/types'
import { Badge, Box, HStack, Icon, Image, Text, Center } from '@chakra-ui/react'
import Task from './Task/Task'

export default function Column(props: { title: String; tasks: TaskType[] }) {
  let { title, tasks } = props

  return (
    <Box maxW="sm" borderWidth="1px" padding="5px 8px">
      <Center>
        <Text textStyle="xl">{title}</Text>
      </Center>

      {tasks.map((task) => (
        <Task title={task.title} body={task.body} category={task.category} />
      ))}
    </Box>
  )
}
