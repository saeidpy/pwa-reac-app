/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Counter extends Component {
   
    // constructor(){
    //     super();
    //     this.increasClick = this.increasClick.bind(this)
    // }

    render() { 
        const {onIncrement,onDelete,counter} = this.props
        return (
        <div>
        <span className={this.getBadgeClasess()}>{this.formatCount()}</span>
        <button onClick={() => onIncrement(counter)} className="btn btn-primary btn-sm m-2">increase</button>
        <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        )
    }

    
    getBadgeClasess() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes
    }

    formatCount() {
        const {value: count} = this.props.counter
        return count === 0 ? "Zero" : count
    }
}
 
export default Counter;