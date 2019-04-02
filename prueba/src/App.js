import React, {Component} from 'react';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
      list: []
    }
  }

  updateTask() {
    console.log('Ok');
    //update this.state.task
  }

  addTaskToList(){
    //add task to this.state.list
  }


  render() {
    return (
      <div className="container">
        {this.state.task}
        <Header
          inputHandler={this.updateTask}
          />
      </div>
    );
  }
}

export default App;
