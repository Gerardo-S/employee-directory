import React from "react";
import Container from "./Container";
import Row from "./Row"
import Search from "./Search";
import EmployeeTable from "./EmployeeTable";

function EmployeeContainer(props) {
    return (
        <Container>
            <Row>
                <Search />
            </Row>
            <br/>
            <EmployeeTable />
        </Container>
    );
};

export default EmployeeContainer;


