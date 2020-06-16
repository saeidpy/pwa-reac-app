import React from 'react';

const navBar = ({onTotalCounter}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="center">
         <span className="navbar-brand" >
             Total
         </span>
         <span className="badge badge-pill badge-primary">
        {onTotalCounter}
        </span>
        </div>
        </nav>
     );
}
 
export default navBar;