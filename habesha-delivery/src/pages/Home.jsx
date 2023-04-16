import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'react-bootstrap';
import heroImg from "../assets/images/hero.png"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Helmet title="home">
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className='hero__content'>
                  <h5>Easy way to make an order</h5>
                  <h1 className='mb-4  hero__title'><span>HUNGRY?</span>Just wait<br/> food at<span> Your door </span></h1>
                  <p>A Habesha food delivery web is a service that allows customers to order Habesha food online and
                     get it delivered to their location</p>
                  <div className='hero__btns d-flex align-items-center gap-5'>
                    <button className='order__btn'>Order now<i class="ri-arrow-right-s-line"></i></button>
                    <button className='all__foods-btn'><Link to='/foods'>See all foods</Link></button>
                  </div>
                  <div className='hero__section d-flex align-items-center gap-5 mt-5'>
                    <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i class="ri-car-line"></i></span>No shipping charge</p>
                    <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i class="ri-check-line"></i></span>100% secure checkout</p>
                </div>
                </div>

              </Col>
              <Col lg="6" md="6">
                <div className='hero__img'>
                  <img src={heroImg} alt="hero-img" className='w-100'/>
                </div>
                
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default Home