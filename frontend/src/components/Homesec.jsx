import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import men from './mendrive.webp'
import './Home.css'
function Homesec() {
  return (
    <div style={{backgroundColor:'white',color:'black',paddingTop:'5%'}}>
      <Container>
      <Row style={{}}>
      <Col>
        <img src={men}></img>
        </Col>
        <Col style={{paddingLeft:'8%',paddingTop:'10%'}}>
        <h1 className='homeh'>Drive when you </h1>
        <h1 className='homeh'>want, make what</h1>
        <h1 className='homeh'>you need</h1>
        <p className='homepp'>Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>
        <Button className='butttt'>Get started</Button>
        </Col>
        
      </Row>
      </Container>
    </div>
  )
}

export default Homesec
