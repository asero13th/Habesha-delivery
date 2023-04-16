import React from 'react'
import {Container, Row,Col, ListGroup, ListGroupItem } from "react-bootstrap";
import logo from "../../assets/images/res-logo.png";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6' className='mt-4'>
            <div className="logo footer__logo text__start">
                <img src={logo}  alt='logo'/>
                <h5 className='mt-2'>Habesha-Delivery</h5>
                <p>
                Habesha food delivery services can save customers time and offer convenience 
                </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
          <h5 className='footer__title'>Contats</h5>
            <ListGroup className='deliver__time-list'>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <p className="">Location: tuludimtu, Addis Ababa, Ethiopia</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone: +251975192086</span>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: aserhailu2020@gmail.com</span>
               
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
          <h5 className='footer__title'>Newsletter</h5>
            <p>subscribe to our website</p>
            <div className="newsletter">
              <input type='email' placeholder='enter your email'/>
              <span><i class="ri-send-plane-line"></i> </span>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg="6" md="6">
            <p>Copyright - 2023, website made by Aser Hailu. All rights reserved</p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex  align-item-center gap-2 justify-content-end">
                <p>Follow: </p>
                <span><Link to="https://www.facebook.com/aserhailu"><i class='ri-facebook-line'></i></Link>{" "}</span>
                <span><Link to="https://www.github.com/asero13th"><i class='ri-github-line'></i></Link>{" "}</span>
                <span><Link to="https://www.youtube.com/"><i class='ri-youtube-line'></i></Link>{" "}</span>
                <span><Link to="https://www.linkedin.com/in/aser-hailu-7b5238240/"><i class='ri-linkedin-line'></i></Link>{" "}</span>
            </div>
          </Col>
        </Row>
      </Container>

    </footer>
  )
}

export default Footer