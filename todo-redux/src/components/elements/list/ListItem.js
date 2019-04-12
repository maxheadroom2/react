import React from 'react'
import Button from '../Button'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions'

const ListItem = (props) => {

  let { item, index,removeItemFromList, markTaskCompleted } = props

  return (
    <div className="card">
      {
        item.completed ? <s>{item.task}</s> : item.task
      }
      <div>
        <Button
          clickHandler={() => markTaskCompleted(index)}>
          {
            item.completed ?
              <i className="fas fa-times"></i> :
              <i className="fas fa-check"></i>
          }
        </Button>
        <Button
          clickHandler={() => removeItemFromList(index)}>
          <i className="fas fa-trash-alt"></i>
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ todo }) => {
  const { task, list } = todo
  return { task, list }
}

export default connect(mapStateToProps, actions)(ListItem)
