import React from 'react'
import ListItem from './ListItem'

const List = (props) => {

  let { listItems, removeItemFromList, markTaskCompleted } = props

  let listContent = listItems.map((item, index) => {
    return (
      <ListItem
        key={index}
        item={item}
        removeItemFromList={() => {removeItemFromList(index)}}
        markTaskCompleted={()=> {markTaskCompleted(index)}}
        />
    )
  })

  return (
    <div>
      { listContent }
    </div>
  )
}

export default List
