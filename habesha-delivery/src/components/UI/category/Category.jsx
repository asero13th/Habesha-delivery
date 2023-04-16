import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CategoryImg01 from "../../../assets/images/category-01.png";
import CategoryImg02 from "../../../assets/images/category-02.png";
import CategoryImg03 from "../../../assets/images/category-03.png";
import CategoryImg04 from "../../../assets/images/category-04.png";

    const catagoryData =  [
        {
            display: "Fastfood",
            imgUrl: CategoryImg01
        },
        {
            display: "Pizza",
            imgUrl: CategoryImg02
        },
        {
            display: "Asian Food",
            imgUrl: CategoryImg03
        },
        {
            display: "Row meat",
            imgUrl: CategoryImg04
        },
    ]

const Category = () => {
  return (
    <Container>
        <Row>
            {
                catagoryData.map((item, index) =>{
                    return(
                        <Col lg="3" md="4">
                        <div className='category__item d-flex align-items-center gap-3'>
                            <div className="category__img">
                                <img src={item.imgUrl} alt="category img"/>
                            </div>
                            <h>{item.display}</h>
                        </div>
                    </Col>
                    )
                })
            }
        </Row>
    </Container>
  )
}

export default Category