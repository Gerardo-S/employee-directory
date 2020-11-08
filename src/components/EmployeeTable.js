import React from 'react';

function EmployeeTable(props) {
    const { characterData } = props;
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
    return (
        <table className="table table-striped table-responsive">
            <thead className="text-center">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">House</th>
                    <th scope="col">Role</th>
                    <th scope="col">School</th>
                    <th scope="col">Species</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {rowList}
            </tbody>
        </table>
    )
};

export default EmployeeTable;