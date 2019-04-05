import React from 'react'

const Input = (props) => {

let { inputHandler, taskValue, } = props

return (
  <input
    type="text"
    placeholder="datos"
    value={taskValue}
    onChange={inputHandler}
  />
)


}

export default Input;
// default.export = input;
