import React, { Component } from 'react';
import NavBar from './components/navBar';
import './App.css';
import Counters from './components/counters'


class App extends Component {
  state = { 
    counters:[
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0},
        {id:5, value:0},
        {id:6, value:0}
    ]
 }

 handleRest = () => {
     const counter = this.state.counters.map(c =>{ 
         c.value = 0
         return c
        })
        this.setState({counters : counter})
 }

 handleIncerment = counter =>{
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index]={...counter}
    counters[index].value++
        this.setState({counters})
}

 handleDelete = counterId =>{
    const counter = this.state.counters.filter(c => c.id !== counterId)
    this.setState({counters: counter})
}

  render() { 
    return ( 
      <React.Fragment>
      <NavBar onTotalCounter={this.state.counters.filter(c=> c.value>0).length}/>
      <main className="container">
        <Counters 
        counters={this.state.counters}
        onDelete={this.handleDelete} 
        onIncerment={this.handleIncerment}
        onRest={this.handleRest}
        />
      </main>
      </React.Fragment>
     );
  }
}
 
export default App;
