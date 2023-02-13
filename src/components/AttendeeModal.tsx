import { Container, Divider, IconButton, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ResidentList from './ResidentList'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
  programName: string
  residentIds: number[]
  handleClose: () => void
}
function AttendeeModal({ residentIds, programName, handleClose }: Props) {
  return (
    <Modal open onClose={handleClose}>
      <Container
        sx={{
          width: '90vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ background: 'white', width: '100%' }} padding={2}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Typography variant='h4' gutterBottom>
              Attendees for Program: {programName}
            </Typography>
            <IconButton onClick={handleClose} size='small'>
              <CloseIcon fontSize='inherit' />
            </IconButton>
          </Box>
          <ResidentList ids={residentIds} />
        </Box>
      </Container>
    </Modal>
  )
}

export default AttendeeModal
