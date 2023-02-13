import { Attendance } from './attendance'

export interface Program {
  id: number
  parentId: number | null
  name: string
  location: string
  allDay: boolean
  start: string
  end: string
  tags: string[]
  createdAt: string
  updatedAt: string
  dimension: string
  facilitators: string[]
  levelOfCare: string[]
  hobbies: string[]
  recurrence: any | null
  isRepeated: boolean
  applicantId: number | null
  attendance: Attendance[]
}

export type ProgramResponse = Program[]
