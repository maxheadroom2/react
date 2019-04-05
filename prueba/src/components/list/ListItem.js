import React from 'react'
import Button from '../Button'

const ListItem = (props) => {

  let { item, removeItemFromList, markTaskCompleted } = props

  //agrego un IF para la parte de una clase

  // if(item.completed === true){
  //   style =  'completed'
  // }

  return (
    <div className="card">
      {
        item.completed ? <s>{item.task}</s> : item.task
      }
      <div>
        <Button clickHandler={markTaskCompleted}>
          {
            item.completed ?  'ok' : 'in completo'
          }
        </Button>
        <Button
          clickHandler={removeItemFromList}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default ListItem
