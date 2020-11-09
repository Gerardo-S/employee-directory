import React, { useState, useEffect } from "react";
import API from "../utils/API"
import Container from "./Container";
import Row from "./Row"
import Search from "./Search";
import EmployeeTable from "./EmployeeTable";


function EmployeeContainer() {
    const [error, setError] = useState("");
    const [characterData, setCharacterData] = useState([]);
    const [search, setSearch]= useState(""); 

    
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
      };
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
            .catch((err) => setError(error.message));

    }, []);

    useEffect(() => {
        console.log(search);
        const filteredCharacterName = characterData.filter((character) => {
            return character.name.toUpperCase().includes(search.toUpperCase());
          });
          console.log(filteredCharacterName);
      }, [search]);
      return (
          <Container>
            <Row>
                <Search value={search} onSearchChange={handleSearchChange}/>
            </Row>
            <br />
            <EmployeeTable characterData={characterData} />
        </Container>
    );
};

export default EmployeeContainer;


