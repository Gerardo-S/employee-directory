import React from "react";

function search(props) {
    return (
        <form >
            <div className="form-group ">
                <label htmlFor="search">Search For Characters:</label>
                <input
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search For Character"
                    id="search"
                />

            </div>
        </form>
    );
};

export default search;