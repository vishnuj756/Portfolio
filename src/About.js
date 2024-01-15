import { Container } from "react-bootstrap";

import AutoLayoutSizingExample from './Box3'
import Slides from "./Slide";
import Box2 from "./Box2"

function About(){
return(< >

<Box2 />
    <Container className="">
  
      <AutoLayoutSizingExample/>
      <Slides/>

    </Container>
    </>
)
}

export default About;