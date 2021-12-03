import React from "react";
import Container from 'react-bootstrap/Container'
import { Table } from "react-bootstrap";

function ContentTable () {

    // documentation
    // https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/basic-row.html

    return (
        <div>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            
        </div>
    );

} export default ContentTable;