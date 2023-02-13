import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchResidents } from '../middleware/api'
import { CircularProgress } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { DateParser } from 'utils/dateUtils'
type Props = {
  ids?: number[]
}

function ResidentList({ ids = [] }: Props) {
  const { isLoading, data } = useQuery({
    queryKey: ['fetchResidents'],
    queryFn: fetchResidents,
  })

  if (isLoading) {
    return <CircularProgress color='inherit' />
  }
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '80vh' }}>
      <Table sx={{ minWidth: 650 }} size='medium' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Status</TableCell>
            <TableCell align='right'>Room</TableCell>
            <TableCell align='right'>Level Of Care</TableCell>
            <TableCell align='right'>Ambulation</TableCell>
            <TableCell align='right'>Move In Date</TableCell>
            <TableCell align='right'>Record Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            ?.filter((item) => (ids.length ? ids.includes(item.id) : true))
            .map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.status}</TableCell>
                <TableCell align='right'>{row.room}</TableCell>
                <TableCell align='right'>{row.levelOfCare}</TableCell>
                <TableCell align='right'>{row.ambulation}</TableCell>
                <TableCell align='right'>
                  {DateParser.getDateAndTimeString(row.moveInDate)}
                </TableCell>
                <TableCell align='right'>
                  {DateParser.getDateAndTimeString(row.createdAt)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ResidentList
