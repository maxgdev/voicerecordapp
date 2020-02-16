import React, { Component }  from 'react'
import EmptyState            from 'components/EmptyState'
import SharedIcon          from '@material-ui/icons/Share'
import { styles }            from './styles.scss'

class RecordView extends Component {
  render() {
    return (
      <div className={styles}>
        <EmptyState
          message="You are now in the Record State"
          icon={<SharedIcon />}
        />
      </div>
    )
  }
}
export default RecordView
