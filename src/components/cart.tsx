import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProductToCart,
  DecreaseCart,
  RemoveProductFromCart,
} from "../redux/products/action";

import style from "./cart-details.module.css";

export default function CartPage(props: any) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: any) => state.products);
  let total = 0;

  let handleAdd = (id: any) => {
    dispatch(AddProductToCart(id, 1));
  };

  let handleRemove = (id: any) => {
    dispatch(RemoveProductFromCart(id));
  };

  const handleLessCart = (e: any) => {
      dispatch(DecreaseCart(e))
  };

  return (
    <Container fluid="lg">
      <Row className="gx-3 mt-5">
        <Col xs="12" lg="8">
          {cart.map((item: any, key: number) => {
            total += item.price * item.qty;
            return (
              <Row key={key}>
                <Col xs="4">
                  <img className={style.img} src={item.image} />
                </Col>
                <Col xs="8" className={style.cartDetail}>
                  <h1>{item.title}</h1>
                  <h2>{item.category}</h2>
                  <h3>{item.rating.count}</h3>
                  <div className={style.flex}>
                    <h4>{"$" + `${item.price}`}</h4>
                    <div className={style.flex}>
                      <Button onClick={() => handleLessCart(item.id)}>-</Button>
                      <span>{item.qty}</span>
                      <Button onClick={() => handleAdd(item.id)}>+</Button>
                    </div>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleRemove(item.id)}
                    >
                      X
                    </Button>
                  </div>
                </Col>
                <hr />
              </Row>
            );
          })}
        </Col>
        {cart.length > 0 ? (
          <Col xs="12" lg="4" className={style.total}>
            <div>
              <h1>
                Total Cart Price: <span>{`$` + total?.toFixed(2)}</span>
              </h1>
            </div>
            <Button variant="primary">Checkout</Button>
          </Col>
        ) : (
          <h1>Hi Please Add item to cart to see here</h1>
        )}
      </Row>
    </Container>
  );
}
