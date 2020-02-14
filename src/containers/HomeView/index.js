import React, { Component } from 'react'
import TextDisplay from 'components/TextDisplay'
import { styles }           from './styles.scss'

class HomeView extends Component {
  render() {
    return (
      <div className={styles} >
        <TextDisplay />
      </div>
    )
  }
}

export default HomeView
