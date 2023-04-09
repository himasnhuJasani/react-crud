import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomForm from './Form';

function CustomModal() {
  return (
    <div className='modal show' style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <CustomForm type='edit' />
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary'>Close</Button>
          <Button variant='primary'>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default CustomModal;
