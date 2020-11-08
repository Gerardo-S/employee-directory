import React from 'react';

function EmployeeTable(props) {
    const { characterData } = props;
    console.log(characterData);
    return (
        <table className="table table-striped">
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
                <tr>
                    <td>Hannah Abbot</td>
                    <td>Hufflepuff</td>
                    <td>Student</td>
                    <td>Hogwarts</td>
                    <td >Human</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>name@Email.com</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>name@Email.com</td>
                    <td>@twitter</td>
                </tr>

            </tbody>
        </table>
    )
};

export default EmployeeTable;