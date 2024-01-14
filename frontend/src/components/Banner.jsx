import React from 'react'
import { Button, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Banner.css'
import { FaArrowRight } from "react-icons/fa";

function Banner() {
  return (
    <div style={{backgroundColor:'black',color:'white',paddingTop:'7%',paddingBottom:'7%'}}>
      <Container style={{textAlign:'center',padding:'0% 17%'}}>
      <Row>
        <Col>
        <h1 className='headone'>Your local taxis <FaArrowRight style={{marginTop:'7px',fontWeight:'300',padding:'5px 0px'}}/> now on Uber</h1>
        <p className='paraone'>Introducing Taxi, the newest way to get a ride with Uber. Now you have the option to request a taxi using your Uber app.</p>
        <button className='buttton'>Request Taxi</button>
        </Col>
      </Row>
    </Container>
    
    </div>
  )
}

export default Banner
