import React from "react";
import Container from 'react-bootstrap/Container';
import imgw from "./imges/true-agency.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Box2() {
    return (
        <section className="custom-container pt-5 pb-5">
        <Container >
   
        <Row>
             <Col sm='12' lg>
             <h3>This is Vishal's Resume </h3>
            <div className="text">
            <span id="p1">Hi, visitor I am vishal shivhare.I am belong from Morena madhay pradesh .i complete my school from
                morena .I am BCA graduated from Victor institute of Professional Studies morena affilated by Makhanlal university
                Bhopal. now i am parsuing my MCA from indore acropolis institute of technology and research indore mp affilated by
                RGPV University Bhopal . I am recently done my two minor projects .One project is about to Online Course Purchase
                in this project I used five technoclogy HTML CSS JAVASCRIPT, BOOSTRAP 5.0 ,PYTHON, DATABASE . and my second
                project one weather app in this project i used four technology HTML and CSS ,JAVASCRIPT ,API .
                <p style={{ marginTop: "12px" }}><b>Full
                    Name:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vishal Shivhare</p>
                <p><b>Date Of Birth:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01/02/2002</p>
                <p>
                    <b>Website:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;XYZ.com
                </p>
                <p>
                    <b>Email:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vishnuj756@gmail.com
                </p>
                <p>
                    <b>Mobile:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8871942880
                </p>
            </span>
            </div>
             </Col>
             <Col sm='12' lg className="sm-mt-5">
             <img src={imgw} className="img1 rounded-5" alt="" />
             </Col>
        </Row>
          
        </Container>
        </section>
    );
}

export default Box2;
