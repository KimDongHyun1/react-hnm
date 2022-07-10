import React, { useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom"

const ProductDetail = () => {

  let {id} = useParams();
  const [product, setProduct] = useState(null)

  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/KimDongHyun1/react-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, [])

  return <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
        </Col>
        <Col>
          <div>\{product?.price}</div>
        </Col>
      </Row>
  </Container>

}

export default ProductDetail