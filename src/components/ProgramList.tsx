import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchPrograms } from '../middleware/api'
import { CircularProgress, Badge, Button } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { DateParser } from 'utils/dateUtils'
import PeopleIcon from '@mui/icons-material/People'
import { Attendance } from 'middleware/apiInterface/attendance'
import AttendeeModal from './AttendeeModal'

function ProgramList() {
  const [modalActiveIndex, setModalActiveIndex] = React.useState<number>(-1)

  const { isLoading, data } = useQuery({
    queryKey: ['fetchPrograms'],
    queryFn: fetchPrograms,
  })

  const getAttendees = React.useCallback((attendance: Attendance[]) => {
    return new Set(
      attendance.filter((item) => item.status !== 'Declined').map((item) => item.residentId),
    )
  }, [])

  if (isLoading) {
    return <CircularProgress color='inherit' />
  }
  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: '80vh' }}>
        <Table sx={{ minWidth: 650 }} size='medium' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Location</TableCell>
              <TableCell align='right'>Dimension</TableCell>
              <TableCell align='right'>Level Of Care</TableCell>
              <TableCell align='right'>Hobbies</TableCell>
              <TableCell align='right'>Facilitators</TableCell>
              <TableCell align='right'>Tags</TableCell>
              <TableCell align='right'>Attendees</TableCell>
              <TableCell align='right'>Start</TableCell>
              <TableCell align='right'>End</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, index) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.location}</TableCell>
                <TableCell align='right'>{row.dimension}</TableCell>
                <TableCell align='right'>{row.levelOfCare.join(' | ')}</TableCell>
                <TableCell align='right'>{row.hobbies.join(' | ')}</TableCell>
                <TableCell align='right'>{row.facilitators.join(', ')}</TableCell>
                <TableCell align='right'>{row.tags.join(' | ')}</TableCell>
                <TableCell align='right'>
                  {
                    <Button onClick={() => setModalActiveIndex(index)}>
                      <Badge badgeContent={getAttendees(row.attendance).size} color='primary'>
                        <PeopleIcon color='action' />
                      </Badge>
                    </Button>
                  }
                </TableCell>
                <TableCell align='right'>{DateParser.getDateAndTimeString(row.start)}</TableCell>
                <TableCell align='right'>{DateParser.getDateAndTimeString(row.end)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {modalActiveIndex !== -1 && (
        <AttendeeModal
          programName={data?.[modalActiveIndex].name || ''}
          handleClose={() => setModalActiveIndex(-1)}
          residentIds={Array.from(getAttendees(data?.[modalActiveIndex].attendance || []))}
        />
      )}
    </>
  )
}

export default ProgramList
