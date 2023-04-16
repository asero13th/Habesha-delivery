import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'react-bootstrap';
import heroImg from "../assets/images/hero.png"
import { Link } from 'react-router-dom';
import Category from '../components/UI/category/Category';
import ProductCard from '../components/UI/product-card/ProductCard';
import { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, } from 'react-bootstrap';


import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png"
import foodCategoryImg02 from "../assets/images/pizza.png"
import foodCategoryImg03 from "../assets/images/bread.png"

import whyImg from "../assets/images/location.png"
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];


const Home = () => {
  const [category, setCategory] = useState('ALL')
  const [allProducts, setAllProducts] = useState(products)

  useEffect(() =>{
      if (category === "ALL"){
        setAllProducts(products)
      }

      if (category === "PIZZA"){
        const filterdProducts = products.filter(item => item.category === "Pizza")
        setAllProducts(filterdProducts)
      }
      if (category === "BURGER"){
        const filterdProducts = products.filter(item => item.category === "Burger")
        setAllProducts(filterdProducts)
      }
      if (category === "BREAD"){
        const filterdProducts = products.filter(item => item.category === "Bread")
        setAllProducts(filterdProducts)
      }

  }, [category ])
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
        <section className='pt-0'>
          <Category /> 
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12" className='text-center'>
                <h5 className='feature__subtitle'>What we serve</h5>
                <h2 className='feature__title'>Just sit back at home</h2>
                <h2 className='feature__title'>We will <span>take care</span></h2>
                <p className='mb-1 mt-4 feature__text'>There are many Habesha food delivery services available</p>
                <p className='feature__text'>versatility, selection, scheduling, group ordering, and commission</p>
              </Col>
              {featureData.map((item, index) => {
                  return(
                    <Col lg="4" md="4" key={index} className='mt-5'>
                        <div className="feature__item text-center px-5 py-3">
                          <img src={item.imgUrl} alt='feature imgs' className='w-25 mb-3'/>
                          <h5 className='fw-bold'>{item.title}</h5>
                          <p>{item.desc}</p>
                        </div>
                    </Col>
                  )
              })}
              
             
            </Row>
          </Container> 
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12"  className='text-center'>
                <h2>Popular Foods</h2>
              </Col>
              <Col lg="12">
                <div className="food__category">
                  <button 
                  onClick={() => setCategory("ALL")}
                  className={`${category === "ALL" ? 'foodBtnActive all__btn' : ""}`}
                  >All</button>
                  <button 
                  className={`${category === "BURGER" ? 'foodBtnActive all__btn' : ""}`}
                  onClick={() => setCategory("BURGER")}
                  ><img src={foodCategoryImg01} alt='food-category'/>Burger</button>
                  <button
                  className={`${category === "PIZZA" ? 'foodBtnActive all__btn' : ""}`}
                  onClick={() => setCategory("PIZZA")}
                  ><img src={foodCategoryImg02} alt='food-category'/>Pizza</button>
                  <button
                  className={`${category === "BREAD" ? 'foodBtnActive all__btn' : ""}`}
                  onClick={() => setCategory("BREAD")}
                  ><img src={foodCategoryImg03} alt='food-category'/>Bread</button>
                </div>
              </Col>
              {
                allProducts.map((item) =>{
                  return (
                    <Col lg="3" md="4" key={item.id} className='mt-5'>
                      <ProductCard item={item}/>
                    </Col>
                  )
                })
              }
            </Row>
          </Container>
        </section> 

        <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home