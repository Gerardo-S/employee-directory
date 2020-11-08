import React from "react";

function search(props) {
    return (
        <form >
            <div className="form-group ">
                <label htmlFor="search">Search For Employee:</label>
                <input
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search For Employee"
                    id="search"
                />

            </div>
        </form>
    );
};

export default search;