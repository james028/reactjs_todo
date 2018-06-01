import React, { Component } from 'react';
import './App.css';
import DeleteTask from './deletetask';


class App extends Component {
  constructor() {
    super();
    this.state = {
      valTodo: '',
      arrTodo: []
    };
  }

  changeVal = (a) => {
    this.setState({
        valTodo: a.target.value
    })
  }

  clickVal = () => {
    let todoSth = this.state.arrTodo.slice();
    todoSth.push(this.state.valTodo);

    this.setState({
      arrTodo: todoSth,
      valTodo: ''
    });
  }

  deleteItem = i => {
    let delTodo = this.state.arrTodo.slice();
    delTodo.splice(i, 1);

    this.setState({
        arrTodo: delTodo,
      });
}

  render() {
    let bullet = this.state.arrTodo.map((e,i) => {
        return(
          <ul key={i}>
            <DeleteTask name={e} del={this.deleteItem}/>
          </ul>
        );
    });

    return (
      <div className="App">
        <input type="text" value={this.state.valTodo} onChange={this.changeVal}/>
        <button onClick={this.clickVal}>Add</button>
        <hr/>
        {this.state.arrTodo.length}
        <br />
        {bullet}
      </div>
    );
  }
}

export default App;
    