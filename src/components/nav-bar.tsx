import {
  Navbar,
  Container,
  Form,
  FormControl,
  Nav,
  InputGroup,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as CartIcon } from "../assets/icons/shopping-cart-solid.svg";
import { ReactComponent as AccountIcon } from "../assets/icons/user-circle-solid.svg";

export default function AppBar() {
  let navigate = useNavigate();
  const { cart } = useSelector((state: any) => state.products);

  const handleChange = (value: any) => {
    navigate(`/category/${value}`);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      sticky="top"
      className="shadow"
    >
      <Container fluid="md">
        <Navbar.Brand href="#">Fake Store</Navbar.Brand>

        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <NavDropdown
          title="Categories"
          id="basic-nav-dropdown"
          onSelect={handleChange}
        >
          <NavDropdown.Item eventKey="electronics">
            Electronics
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="jewelery">Jewelery</NavDropdown.Item>
          <NavDropdown.Item eventKey="men's clothing">
            Men's Clothing
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="women's clothing">
            Women's Clothings
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link style={{ position: "relative" }}>
          <Link to="/cart">
            <CartIcon style={{ width: "25px", height: "25px" }} />
            <Badge
              bg="primary"
              style={{
                position: "absolute",
                top: -5,
                fontSize: "10px",
                right: 0,
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
              }}
            >
              {cart.length}
            </Badge>
          </Link>
        </Nav.Link>
        <Nav.Link>
          <AccountIcon style={{ width: "25px", height: "25px" }} />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}
