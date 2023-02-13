import { Attendance } from './attendance'

export interface Resident {
  id: number
  name: string
  firstName: string
  lastName: string
  preferredName?: string
  status: string
  room: string
  levelOfCare: string
  ambulation: string
  birthDate: string
  moveInDate: string
  createdAt: string
  updatedAt: string
  applicantId?: any
  attendance: Attendance[]
}

export type ResidentResponse = Resident[]
