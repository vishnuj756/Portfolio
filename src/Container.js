import React from "react";
import vishal from "./imges/vishal.png"
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Badge from 'react-bootstrap/Badge'; 
import { Col, Container, Row } from "react-bootstrap";

function GridBox(){
 
    return(
      <section className="banner">
   <Container>
  
    <Row className="align-items-center">
<Col>
<img src={vishal} alt="" style={{maxWidth:"300px"}}/>
</Col>
<Col className="messages mb-3 text-center mt-3">

 <Badge bg="dark" className="p-3 rounded-5 fs-6 min-w firstmessage"  > 
 <WavingHandIcon className="me-2" />
 Visitors I m Vishal
 </Badge>
<br/> 
      <Badge bg="warning" className="rounded-5 mt-3 p-3 fs-6 firstmessage">
        Vishnuj756@gmail.com
      </Badge>
</Col>
    </Row>
    </Container> 
    </section>
    )
    
}
export default GridBox;