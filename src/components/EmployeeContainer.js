import React, { useState, useEffect } from "react";
import API from "../utils/API"
import Container from "./Container";
import Row from "./Row"
import Search from "./Search";
import EmployeeTable from "./EmployeeTable";


function EmployeeContainer() {
    const [error, setError] = useState("");
    const [characterData, setCharacterData] = useState()
    useEffect(() => {
        API.getCharacters().then((res) => {
            if (res.data.length === 0) {
                throw new Error("No results found.");
            }
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            }
            const { data } = res;
            setCharacterData(data);

        })
            .catch((err) => setError(err.message));



    }, []);
    return (
        <Container>
            <Row>
                <Search />
            </Row>
            <br />
            <EmployeeTable characterData={characterData} />
        </Container>
    );
};

export default EmployeeContainer;


