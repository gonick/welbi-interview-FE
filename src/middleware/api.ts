import { ProgramResponse } from './apiInterface/program'
import { ResidentResponse } from './apiInterface/resident'
import WebliApi from './middleware'

export const fetchResidents = WebliApi.get<ResidentResponse>('residents')

export const fetchPrograms = WebliApi.get<ProgramResponse>('programs')
