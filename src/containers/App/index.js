import React, { Component }   from 'react'
import {  MuiThemeProvider  } from '@material-ui/core/styles'
import theme                  from 'configs/config-theme'
import {
  HashRouter,
  Switch,
  Route
}                     from 'react-router-dom'
import AppBar                 from 'components/AppBar'
import FavoritesView          from 'containers/FavoritesView'
import SharedView             from 'containers/SharedView'
import RecordView             from 'containers/RecordView'
import { appConfig }          from 'configs/config-main'

// global styles for entire app
import './styles.scss'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HashRouter>
          <div>
            <div>
              <AppBar>{appConfig.name}</AppBar>
            </div>
            <div className="app-shell">
              <Switch>
                <Route path="/favorites" component={FavoritesView} />
                <Route path="/shared" component={SharedView} />
                <Route path="/record" component={RecordView} />
              </Switch>
            </div>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
