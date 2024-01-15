import { Container, Row, Col, Form } from 'react-bootstrap'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Example from './Pop';
import { useState } from 'react';

const Contact = () => {

    const [intial,setpop]=useState(false);
    const Showpop=()=>{
     setpop(true)
    }
    const closepop=()=>{
        setpop(false)
    }
    function handleSubmit(event) {
        event.preventDefault(); // prevent the form from submitting
        console.log('Input value on submit: ');
      }
    return (
        <Container className='py-5'>
         
        {
            intial && <Example closepop={closepop} Brand="Thank you We will Contact Shortly" />
        
        }
            <Row className=' p-4'>
                <Col sm="6" className='mb-4 mb-sm-0'>
                    <div className='border border-1 p-5 rounded-1 contact-box '>
                        <h4 className='border-start border-4 ps-2 border-warning'>Get in Touch</h4>
                        <Form onSubmit={handleSubmit}>
                            <div class="mb-2">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control border-0 border-bottom border-1 border-warning rounded-0" />
                            </div>
                            <div class="mb-2">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control border-0 border-bottom border-1 border-warning rounded-0" />
                            </div>
                            <div class="mb-2">
                                <label className="form-label">Phone Number</label>
                                <input type="text" className="form-control border-0 border-bottom border-1 border-warning rounded-0" />
                            </div>
                            <div class="mb-2">
                                <label className="form-label">Message</label>
                                <textarea class="form-control border-0 border-bottom border-1 border-warning rounded-0" no-resize></textarea>
                            </div>
                            <div className='mb-3 d-flex justify-content-center'>
                                <button type="submit" className="btn btn-warning rounded-4 px-4" onClick={Showpop} >Submit</button>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col sm="6" >
                    <div className='border border-1 rounded-1 p-5 contact-box h-100'>
                        <h4 className='border-start border-4 ps-2 border-warning mb-3'>Contact Information</h4>
                        <h5>Let's Collaborate</h5>
                        <p className='pb-3 border-1 border-warning border-bottom'>If you're interested in a project or hiring my services, share project details in your message. Excited about new challenges and opportunities.</p>
                        <div className='mb-3'> <LocationOnIcon color="success" /> 11/15 scheme no 54 Vijay Nagar Indore (M.P)</div>
                        <div><PhoneIcon color='success' /> +91 8871942880</div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact

