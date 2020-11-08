import React from 'react';

function EmployeeTable() {
    return (
        <table className="table table-striped">
            <thead className = "text-center">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">name@Email.com</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody className = "text-center">
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>name@Email.com</td>
                    <td>@twitter</td>
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