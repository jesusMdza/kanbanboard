import { TaskCategory } from './enums'

export type ColumnType = {
  id: String
  title: String
  tasks?: TaskType[]
}

export type TaskType = {
  id: String
  title: String
  body?: String
  category?: TaskCategory
}
