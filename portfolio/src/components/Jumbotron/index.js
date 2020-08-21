import React from 'react';

function Jumbotron({ children}) {
    return (
        <div
        style={{height: 550, clear: "both", paddingTop:100, textAlign: "center", id: "container"}}
        className="jumbotron border border-dark"
        >

            {children}
        </div>
    );
}

export default Jumbotron;