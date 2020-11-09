import React from "react";

function search(props) {
    console.log(props.value);
    return (
        <form >
            <div className="form-group ">
                <label htmlFor="search">Search For Characters:</label>
                <input
                    placeholder="Search For Character"
                    name="search"
                    type="text"
                    className="form-control"
                    id="search"
                    value={props.value}
                    onChange={props.onSearchChange}
                />

            </div>
        </form>
    );
};

export default search;