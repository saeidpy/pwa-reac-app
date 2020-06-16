import React, { Component } from 'react';
import Counter from './counter'

class counters extends Component {
   
    render() { 
        const {onDelete,onRest,onIncerment} = this.props
        return (
             <div className="main">
                 <button 
                 onClick={onRest} 
                 className="btn btn-secondary btn-sm m-2">
                     Rest
                     </button>

            {this.props.counters.map(counter => (
            <Counter 
            key={counter.id} 
            onDelete={onDelete} 
            onIncrement={onIncerment}
            counter={counter}/>))}
        </div> );
    }
}
 
export default counters;