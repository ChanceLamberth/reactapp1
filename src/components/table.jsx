import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import { Container, Row } from 'react-bootstrap';
import BasicCard from './card';

export default function BasicRowEditingGrid() {
  return (
    <>
    <Container style={{paddingTop:'25px'}}>
      <Row>
        <BasicCard value="MARKET VALUE" price="123.23"/>
        <BasicCard value="POSITION VALUE" price="123.23"/>
        <BasicCard value="CASH VALUE" price="123.23"/>
        
      </Row>
      
    </Container>
    {/* Remove if I want box to go full width */}
      <Container>
          <div style={{ height: 300, width: '100%', paddingTop:'25px'}}>
            <DataGrid editMode="row" rows={rows} columns={columns} />
        </div>
      </Container>
    </>
  );
}

const words = "Test"

const columns = [
    // Name
  { field: 'stock', headerName: 'Stock', width: 180, editable: true },

    // Age
  { field: 'price', 
    headerName: 'Price',
    type: 'number',
    editable: true},

    // Date Created
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 180,
    editable: true,
  },

  // Last Login
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    type: 'dateTime',
    width: 220,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    stock: "VOO",
    price: 250.25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    stock: randomTraderName(),
    price: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    stock: randomTraderName(),
    price: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    stock: randomTraderName(),
    price: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    stock: randomTraderName(),
    price: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];
