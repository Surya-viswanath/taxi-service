import React from 'react'
import './menu.css'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { FaGlobe } from "react-icons/fa6";
function Menu() {
  return (
    <div style={{backgroundColor:'black',color:'white'}}>
     


<Navbar  data-bs-theme="dark" style={{backgroundColor:'black',color:'white'}}>
        <Container style={{display:'flex',color:'white'}}>
          <Navbar.Brand href="#home">uber</Navbar.Brand>
          <Nav className="me-auto" style={{color:'white'}} >
         <button className='butt'> <NavDropdown title="company" style={{color:'white'}} 
        
        data-bs-theme="light">
              <NavDropdown.Item  href="#action/3.1" >About us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Our offerings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">How uber works</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
               Global citizenship
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
               Newsroom
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
               Investor relations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
               Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">
             Careers
              </NavDropdown.Item>
            </NavDropdown>
            </button>
           <button className='butt'> <Nav.Link href="#home" style={{color:'white'}} >Safety</Nav.Link></button>
           <button className='butt'>   <Nav.Link href="#features" style={{color:'white'}} >Help</Nav.Link></button>
            
          </Nav>



          <Nav className="ms-auto" >
          
         
          <button className='butt'>  <Nav.Link href="#home" style={{color:'white',display:'flex'}} ><FaGlobe style={{marginTop:'5px'}}/>en</Nav.Link></button> 
         <button className='butt'>  <NavDropdown title="Products" style={{color:'white'}}>
              <NavDropdown.Item href="#action/3.1" style={{color:'white'}}>en</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Our offerings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">How uber works</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
               Global citizenship
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
               Newsroom
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
               Investor relations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
               Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">
             Careers
              </NavDropdown.Item>
            </NavDropdown></button> 
            <button className='butt'>  <Nav.Link href="#features">Help</Nav.Link></button>
            
          </Nav>
        </Container>
      </Navbar>
      
     

    </div>
  )
}

export default Menu
