// import React from "react";
// import { Container } from "react-bootstrap";
import Sdata from "./data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutSizingExample() {
    return (
        <Container>
            <Row className="justify-content-md-center pt-5 pb-5">


                {Sdata.map((val) => {
                    return (
                        <Col sm='12' lg className="par2" >
                            <ul className="p-5  bg-dark">
                                <h3>{val.title}</h3>
                                <li>{val.skill}</li>
                                <li>{val.framework}</li>
                                <li>{val.language}</li>
                                <li>{val.db}</li>
                                <li>{val.Alter}</li>

                            </ul>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}
export default AutoLayoutSizingExample;