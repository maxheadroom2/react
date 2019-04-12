import React from 'react'

const Input = (props) => {

  let { inputHandler, inputValue } = props

  return (
    <input type="text"
      placeholder="New task..."
      value={inputValue}
      onChange={inputHandler}
      />
  )
}

export default Input
