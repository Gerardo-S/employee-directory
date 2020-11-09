# Employee Directory

## Description 
An application using REACT that displays entire employee directory upon landing on home page. Application also features a search input form that filters through employees by name. 

## Instruction/Use 

Before launching app ensure package dependencies below have been installed.
````
    "npm i"
    "bootstrap"
    "axios"
````
Once dependencies have been installed using node open integrated terminal for current directory. Use  ``npm install`` to launch application. Upon page load user will be displayed a table of employees. User may use search form to filer current employees.

## Demo of Application
<img src="public\images\Search Functionality.gif" alt="Demo of Search Functionality">

## Break Down of Components
#### SRC:
* Container: Holds Search and Employee table 
* EmployeeContainer: Encapsulates Container with search form and table
* EmployeeTable: Renders employee data from API
* Jumbotron: Renders Header with Title
* Row: Sets styling location for search form
* Search: Receives user input for submission

## Improvements/Additional Features

Application currently displays header rows with icons to filter employees. Future development will include sort capabilities for all fields. 

Link to Repo:
<a href="https://github.com/Gerardo-S/employee-directory">https://github.com/Gerardo-S/employee-directory</a><br>
Link to Deployed Application:
<a href="https://Gerardo-S.github.io/employee-directory">"https://Gerardo-S.github.io/employee-directory"</a><br>
