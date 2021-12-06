import React from "react";
import { Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FetchCategoryProduct } from "../redux/products/action";
import ProductCard from "./product-card";
import { useParams } from "react-router-dom";

export default function CategoryPage(props: any) {
  const dispatch = useDispatch();
  const { id = "electronics" } = useParams();
  const { products } = useSelector((state: any) => state.products);
  React.useEffect(() => {
    dispatch(FetchCategoryProduct(id));
  }, [products]);
  return (
    <Container fluid="lg">
      <h4 className="m-0 p-0 mt-3 white capitalize">{id}</h4>
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
