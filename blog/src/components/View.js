import React from 'react';

const View = (props) => {
  console.log(props);
  return (
    <h1>This is view { props.match.params.id }</h1>
  )
}

export default View
