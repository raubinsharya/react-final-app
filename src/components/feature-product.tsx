import { Container, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./product-card";
import React from "react";
import { FetchProducts } from "../redux/products/action";

export default function FeatureProduct() {
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state.products);

  React.useEffect(() => {
    dispatch(FetchProducts());
  }, []);

  return (
    <Container fluid="lg">
      <h4 className="m-0 p-0 mt-3 white">Feature Products</h4>
      <div className="row">
        {products.map((p: any, i: number) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={i}>
              <ProductCard data={p} />
            </Col>
          );
        })}
      </div>
    </Container>
  );
}
