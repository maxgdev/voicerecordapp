import React, { Component }   from 'react'
import {  MuiThemeProvider  } from '@material-ui/core/styles'
import theme                  from 'configs/config-theme'
import AppBar                 from 'components/AppBar'
import Home                   from 'containers/Home'

// global styles for entire app
import './styles.scss'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar>Your React App</AppBar>
          <Home />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
