import React from 'react';
import { ReactDOM } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useDelete from '../hooks/useDelete';
import CustomModal from './Modal';

const UserListItem = ({ item, refresh, no, setFomType }) => {
  const { setDeleteItem } = useDelete();
  const handleDelete = (id) => {
    setDeleteItem(id);
    refresh(true);
  };

  const handleEdit = (id) => {
    setFomType({ type: 'edit', id: id });
  };
  return (
    <tr>
      <td>{no}</td>
      <td>
        <Link to={`/employee/${item.id}`}>{item.name}</Link>
      </td>
      <td>
        <Link to={`/employee/${item.id}`}>{item.age}</Link>
      </td>
      <td>
        <Link to={`/employee/${item.id}`}>{item.designation}</Link>
      </td>
      <td>
        <Button onClick={() => handleEdit(item.id)} className='me-2'>
          Edit
        </Button>
        <Button onClick={() => handleDelete(item.id)} variant='danger'>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default UserListItem;
