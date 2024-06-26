import React,{useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/UI/product-card/ProductCard';


import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png"
import foodCategoryImg02 from "../assets/images/pizza.png"
import foodCategoryImg03 from "../assets/images/bread.png"


const AllFoods = () => {
  const [category, setCategory] = useState('ALL')
  const [allProducts, setAllProducts] = useState(products)
  
  return (
    <div>
     
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
    </div>
  )
}

export default AllFoods