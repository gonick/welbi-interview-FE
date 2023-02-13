import React from 'react'
import ResidentList from './components/ResidentList'
import './App.css'
import { Container } from '@mui/system'
import { Grid, Box, Tabs, Tab, Typography } from '@mui/material'
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import ProgramList from './components/ProgramList'

function App() {
  // const match = useMatch()
  return (
    <Container sx={{ width: '100%', padding: '30px' }}>
      {/* <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5' component='h5' gutterBottom>
            Residents
          </Typography>
          <ResidentList />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid> */}
      <BrowserRouter>
        <Route
          path='/'
          render={(history: { location: { pathname: string } }) => (
            <Tabs value={history.location.pathname !== '/' ? history.location.pathname : false}>
              <Tab value='/residents' label='Residents' component={Link} to='/residents' />
              <Tab value='/programs' label='Programs' component={Link} to='/programs' />
            </Tabs>
          )}
        />
        <Box sx={{ marginTop: '20px' }}>
          <Switch>
            <Route path='/residents' component={ResidentList} />
            <Route path='/programs' component={ProgramList} />
          </Switch>
        </Box>
      </BrowserRouter>
    </Container>
  )
}

export default App
