import React from 'react'
import Button from './elements/Button'
import Input from './elements/Input'

const Header = (props) => {
  let {inputHandler, clickHandler, taskValue} = props

  return (
    <div className="card">
    <h1>To do List</h1>
    <Input
      inputHandler={inputHandler}
      taskValue={taskValue}
      />
    <Button
      clickHandler={clickHandler}>
      Add
    </Button>
  </div>)
}

export default Header; // se exporta ya que esto genera un objeto
