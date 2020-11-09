import React, { useState } from 'react';

function EmployeeTable(props) {
    const { characterData } = props;
    // const [color, setColor] = useState();
    const [currentSort, setSort] = useState("default");

    const sortTypes = {
        up: {
            class: "sort-up",
            fn: (a,b) => a.name - b.name
        },
        down: {
            class: "sort-down",
            fn: (a,b) => b.name - a.name
        },
        default: {
            class: "sort",
            fn: (a,b)=> a
        }
    };
    const handleSortChange = () => {
        let nextSort;
        if(currentSort === "down"){
            nextSort = "up";
        }
        else if (currentSort === "up"){

            nextSort= "default"
        }
        else if (currentSort === "default"){
            nextSort= "down";
        };
        setSort(nextSort)
        
      };
  

    const rowList = characterData
        .map((character) => (
            <tr key={character._id}>
                <td >{character.name}</td>
                <td >{character.house}</td>
                <td >{character.role}</td>
                <td >{character.school}</td>
                <td >{character.species}</td>
            </tr>

        ));

    // The following code returns undefined when I am trying to compare name values. Revisit
    // const rowListFiltered = rowList.sort(sortTypes[currentSort].fn())
    return (
        <table className="table table-striped table-responsive">
            <thead className="text-center">
                <tr>
                    <th scope="col" onClick={handleSortChange}>Name <i className={`fa fa-${sortTypes[currentSort].class}` } ></i></th>
                    <th scope="col" onClick={handleSortChange}>House <i className={`fa fa-${sortTypes[currentSort].class}` }></i></th>
                    <th scope="col" onClick={handleSortChange}>Role <i className={`fa fa-${sortTypes[currentSort].class}` }></i></th>
                    <th scope="col" onClick={handleSortChange}>School <i className={`fa fa-${sortTypes[currentSort].class}` }></i></th>
                    <th scope="col" onClick={handleSortChange}>Species <i className={`fa fa-${sortTypes[currentSort].class}` }></i></th>
                </tr>
            </thead>
            <tbody className="text-center">
                {rowList}
            </tbody>
        </table>
    )
};

export default EmployeeTable;