import React from 'react'
import Button from './elements/Button'
import Input from './elements/Input'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

const Header = (props) => {

  let {
    addTaskToList,
    updateTask,
    task
  } = props

  return (
    <div className="card">
      <h1>To Do List</h1>
      <Input
        inputHandler={(e) => updateTask(e.target.value)}
        inputValue={task}
        />
      <Button
        clickHandler={addTaskToList}>
        Add
      </Button>
    </div>
  )
}

const mapStateToProps = ({ todo }) => {
  const { task } = todo
  return { task }
}

export default connect(mapStateToProps, actions)(Header)
