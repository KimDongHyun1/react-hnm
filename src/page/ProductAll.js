import React from 'react'
import { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
import ProductCard from './ProductCard';

const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts= async() => {
    let searchQuery = query.get('q')||"";
    let url = `https://my-json-server.typicode.com/KimDongHyun1/react-hnm/products?=${searchQuery}`;
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data);
  }

  useEffect(() => {
    getProducts()
  }, [query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, idx) => (
            

            <Col lg={3} key={idx}>
              <ProductCard item={menu}/>
            </Col>
          ))}

        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll