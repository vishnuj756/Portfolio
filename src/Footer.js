import { Container, Row, Col } from 'react-bootstrap';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col sm="12" md="6">
            <h5>GET IN TOUCH</h5>
            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className='icon-size'>
             <Link to="https://www.instagram.com/vishal_shivhare24/" target='blank'  className='link-light '> <InstagramIcon /></Link>
            <Link to="https://www.linkedin.com/in/vishal-shivhare-23ab72273/" target='blank'  className='link-light '><LinkedInIcon /></Link>
             <Link to='https://vishnuj756@gmail.com' target='blank'  className='link-light '><MailIcon /></Link>
             <Link to="https://www.facebook.com/vishal.shivhare.58367116/" target='blank' className='link-light '><FacebookIcon /></Link>
            </div>

          </Col>
          <Col className='footer-right-box d-sm-inline-flex  justify-content-sm-end'sm="12" md="6" >
            <div className='me-4 mt-3'>
              <SportsVolleyballIcon />
          <Link to='https://www.google.com' target='blank' className='text-decoration-none text-white'>www.google.com</Link>
          
            </div>
            
          
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
