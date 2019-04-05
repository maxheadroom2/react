import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/list/List'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      task: '',
      list: []
    }
  }
// actualiza el input
  updateTask = (event) => {
    this.setState({
      task: event.target.value
    })

    if(event.key === 'Enter') {
      this.addTaskToList()
    }
  }
// seccion que agrega el listado del input
  addTaskToList = () => {
    if(this.state.task) {
      let newList = this.state.list
      newList.push({
        task: this.state.task,
        completed: false
      })

      // newList.push(this.state.task) este es el anterior antes de arreglo

      this.setState({
        task: '',
        list: newList
      })
    }
  }

// recordando que tenemos que crear una nueva lista ya que no debemos modificar nada
// asignamos a newList[index] su indice. completado o al presionarlo desacompletado, simplemente cambiamos de desacompletado
// this.setState lo usamos para modificar newList y lo enviamos a los hijos
  markTaskCompleted = (index) => {
    let newList = this.state.list
    newList[index].completed = !newList[index].completed
    this.setState({
      list: newList
    })
  }

  removeItemFromList = (index) => {
    let newList = this.state.list
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div className="container">
        <Header
          inputHandler={this.updateTask}
          taskValue={this.state.task}
          clickHandler={this.addTaskToList}
          />
        <List
          listItems={this.state.list}
          removeItemFromList={this.removeItemFromList}
          markTaskCompleted={this.markTaskCompleted}
          />
      </div>
    );
  }
}

export default App;
