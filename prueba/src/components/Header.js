import React from 'react'
import Button from './Button'
import Input from './Input'

const Header = (props) => {
  return (

    <div className="card">
      <h1>To do List</h1>
        <Input
        inputHandler={props.inputHandler}
        />
      <Button>
      Add
      </Button>
    </div>
    
 )
}

export default Header; // se exporta ya que esto genera un objeto
