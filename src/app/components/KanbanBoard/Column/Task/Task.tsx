import styles from './task.module.css'
import { TaskCategory } from '@/app/shared/enums'
import { Badge, Box, HStack, Icon, Image, Text, Center } from '@chakra-ui/react'

export default function Task(props: {
  title: String
  body?: String
  category?: TaskCategory
}) {
  let { title, body, category } = props

  return (
    <Box border="1px solid red" borderRadius="5px" padding="">
      <Text textStyle="md">{title}</Text>
      {body ? <Text textStyle="sm">{body}</Text> : null}
      <Text textStyle="sm">Category: {category}</Text>
    </Box>
  )
}
