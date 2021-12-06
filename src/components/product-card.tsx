import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AddProductToCart } from "../redux/products/action";
import "./product.card.css";
export default function ProductCard(props: any) {
  const dispatch = useDispatch();
  const handleAddCart = (e: any) => {
    dispatch(AddProductToCart(props.data.id, 1));
  };
  return (
    <div className="main">
      <img src={props.data.image} alt="" />
      <h2>{props.data.title}</h2>
      <div className="btn-group">
        <Button variant="danger" size="sm" onClick={handleAddCart}>
          Add to Cart
        </Button>
        <Link to={`/${props.data.id}`}>
          <Button size="sm" variant="success">
            Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
