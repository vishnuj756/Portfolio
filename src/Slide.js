import { Col, Container, Row } from 'react-bootstrap';
import Img from './Img'

function DarkVariantExample() {
  return (
    <Container className='align-items-center'>
      <h2 className="mb-4" style={{ textAlign: "center" }}>MY PROJECT DESIGNS</h2>
      <Row className="align-items-center mb-4 grid border border-4 p-4 rounded-5">
        {Img.map((val) => (
          <Col  md={4} className=' p-2 g-col-6'>
            <img src={val.url} style={{ maxWidth: "100%", }} className='mx-auto d-block h12  border border-secondary-subtle rounded-4'/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DarkVariantExample;
