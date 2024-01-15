
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function Example(props) {
  const { closepop, Brand} = props; 
  return (
    <>
      <Modal show={true} onHide={closepop} backdrop={'static'} keyboard={false} centered={true} >
      <div className='border border-warning border-3 rounded-2'>
        <div className='bg-warning'>
          <Modal.Header closeButton className='border-0  bg-warning rounded-1'>

          </Modal.Header>
          <Modal.Body className=''>
            <CheckCircleIcon className='w-100' style={{height:"120px"}} />
            <h1 className='fs-4 text-center'>{Brand}</h1></Modal.Body>
        </div>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button variant="primary" onClick={closepop} className='bg-warning border-0 pop-fot shadow-lg'>
            Ok
          </Button>
        </Modal.Footer>
</div>
      </Modal>
    </>
  );
}

export default Example;
