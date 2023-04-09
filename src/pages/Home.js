import React, { useState } from 'react';
import { Button, ListGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomForm from '../component/Form';

import UserListItem from '../component/UserListItem';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { data, isLoading, error, setRefresh } = useFetch('employee');
  const [fomType, setFomType] = useState({ type: 'create', id: '' });
  console.log(data, isLoading, error);

  if (isLoading) return <div>Loading...</div>;

  if (error && !isLoading) return <div>Something Went Wrong</div>;

  return (
    <div>
      <div className='mb-4'>
        <h1>{fomType.type === 'create' ? 'Create Employee' : 'Edit Form'}</h1>
        {fomType.type !== 'create' && <Button onClick={() => setFomType({ type: 'create', id: '' })}>Create Form </Button>}
        <CustomForm refresh={setRefresh} id={fomType.id} type={fomType.type} />
      </div>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employees, index) => (
            <UserListItem setFomType={setFomType} refresh={setRefresh} key={employees.id} no={index + 1} item={employees} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
