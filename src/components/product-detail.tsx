import React from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  AddProductToCart,
  FetchProduct,
  FetchProducts,
} from "../redux/products/action";

import "./product-detail.css";

export default function ProductDetailPage(props: any) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product } = useSelector((state: any) => state.products);
  const [count, setCount] = React.useState(1);
  React.useEffect(() => {
    dispatch(FetchProducts());
    dispatch(FetchProduct(id));
  }, []);

  const handleChange = (value: any) => {
    setCount(value);
  };

  const handleAddCart = (e: any) => {
    dispatch(AddProductToCart(id, count));
  };

  return (
    <Container>
      <Row className="main-detail gx-5">
        <Col xs="12" lg="6">
          <div className="img-box">
            <img src={product.image} alt="" />
          </div>
        </Col>
        <Col xs="12" lg="6" className="btn-group">
          <span>{product.category}</span>
          <h1>{product.title}</h1>
          <h2>{product.description}</h2>
          <Row>
            <Col className="price">{"$" + product?.price}</Col>{" "}
            <Col className="rating">{product.rating?.rate}</Col>
          </Row>
          <Row className="gx-5">
            <Col xs="6">
              <Dropdown onSelect={handleChange}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {count} Product Quantity
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="2">2</Dropdown.Item>
                  <Dropdown.Item eventKey="3">3</Dropdown.Item>
                  <Dropdown.Item eventKey="4">4</Dropdown.Item>
                  <Dropdown.Item eventKey="5">5</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs="6">
              <Button variant="danger" onClick={handleAddCart}>
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
