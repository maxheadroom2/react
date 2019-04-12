import React from 'react'
import ListItem from './ListItem'
import { connect } from 'react-redux'

const List = (props) => {

  let { list } = props

  let listContent = list.map((item, index) => {
    return (
      <ListItem
        key={index}
        item={item}
        index={index}
        />
    )
  })

  return (
    <div>
      { listContent }
    </div>
  )
}

const mapStateToProps = ({ todo }) => {
  const { task, list } = todo
  return { task, list }
}

export default connect(mapStateToProps, null)(List)
