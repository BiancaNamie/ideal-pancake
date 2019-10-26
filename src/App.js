import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './views/List';

import React, {Component} from "react";
import * as TodoModel from "./models/TodoModel";

//import Alert from "react-bootstrap/Alert";
//import React from "react";


class App extends Component{
  state = {
    name: "",
    list: []
  }

  componentDidMount () {
    this.getTodos();
  }

  getTodos = () => {
    TodoModel.getTodos()
    .then((value)=> this.updateList(value))
    .catch((error) => console.error(error));
  }
  
  updateList = (value) =>{
    this.setState(()=> ({
      list: value
    }))
  } 

  onChange = (event) =>{

    const {value} = event.target;
    this.setState(() => ({
      name: value
    }))

   // console.log(event.target.name, "value: ", event.target.value);
    //this.setState{() => ({
     // name: event.target.value
    //})
  }

  onClick = () => {
    const {name} = this.state;
    TodoModel.add(name)
      .then( this.getTodos /*value => this.updateList(value)*/)
      .catch(error => console.error(error))
  
    /*  this.setState(() => ({
      list: [...list, {title : name}],
      name:"",
    }))*/
  }

  remove = id => {
    TodoModel.destroy(id)
      .then(this.getTodos)
      .catch(error => console.error(error))
    /*const {list} = this.state;
    this.setState(() => ({
      list: list.filter(item => item.id !== id),
    }))*/
  }

  render(){
    const{ name, list } = this.state;

    return(
      <div>
        <input type ="text" value={name} onChange={(event) => this.onChange(event)} />
        <button onClick={this.onClick}>Add</button>
        <List list={list} onRemove={this.remove}/>
      </div>
    )
  }
}



/**
function App() {
  return (
    <div className="App">
      <Alert variant="primary">
        Hello, world!
      </Alert>
    </div>
  );
}
 */
export default App;
