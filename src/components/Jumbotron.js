import React from "react";


function Jumbotron() {
    return (
        <div className="jumbotron text-center d-flex align-content-around flex-wrap" style={{ height: 20 }}>
            <div className="container  ">
                <h1 className="display-4">The World of Harry Potter</h1>
                <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
            </div>
        </div>
    )

}

export default Jumbotron;
