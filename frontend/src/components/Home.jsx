import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import women from './womenpass.webp'
import './Home.css'

function Home() {
  return (
    <div>
       <Container>
      <Row style={{paddingTop:'4%'}}>
        <Col style={{paddingTop:'15%',paddingRight:'4%'}}>
        <h1 className='homeh'>Go anywhere with </h1>
        <h1 className='homeh'>Uber</h1>
        <p className='homep'>Request a ride, hop in, and go.</p>
        </Col>
        <Col>
        <img src={women}></img>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Home
