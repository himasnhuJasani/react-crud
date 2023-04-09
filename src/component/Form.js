import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import useCreate from '../hooks/useCreate';
import useEdit from '../hooks/useEdit';

const CustomForm = ({ type, refresh, id }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const { editItem } = useEdit();

  const { setCreate } = useCreate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'create') {
      const data = {
        id: new Date().getTime(),
        name,
        age,
        designation,
      };
      setCreate(data);
      refresh();
    }
    if (type === 'edit') {
      editItem({
        id,
        name,
        age,
        designation,
      });
      refresh();
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Name </Form.Label>
        <Form.Control value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Name' />
        <Form.Text className='text-muted'>We'll never share your Name with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Age </Form.Label>
        <Form.Control value={age} onChange={(e) => setAge(e.target.value)} type='number' placeholder='Enter Age' />
        <Form.Text className='text-muted'>We'll never share your Name with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>designation </Form.Label>
        <Form.Control value={designation} onChange={(e) => setDesignation(e.target.value)} type='text' placeholder='Enter Designation' />
        <Form.Text className='text-muted'>We'll never share your Name with anyone else.</Form.Text>
      </Form.Group>

      <Button variant='primary' type='submit'>
        {type === 'create' ? 'Create ' : 'Edit'}
      </Button>
    </Form>
  );
};

export default CustomForm;
