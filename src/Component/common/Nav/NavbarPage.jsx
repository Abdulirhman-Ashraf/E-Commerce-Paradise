import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Search from "../search/Search";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../store/slices/categories/categoriesThunk";
import { useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { TbBasketHeart } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";

import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import BasketIcon from "../../ecommerce/basketIcon/BasketIcon";
import { Spinner } from "react-bootstrap";
const NavbarPage = () => {
  const dispatch = useDispatch();
  const { values, loading } = useSelector((state) => state.categories);

  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Navbar expand="lg" className=" navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <h1>Paradise</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={NavLink} to="/" className="linkHover">
              Home
            </Nav.Link>
            <NavDropdown
              title="Categories"
              id="navbarScrollingDropdown"
              className="categoriesDropdownMenu linkHover"
            >
              {loading && (
                <NavDropdown.Item disabled>
                  <Container>
                    <Spinner animation="border" size="sm" />
                    Loading ....
                  </Container>
                </NavDropdown.Item>
              )}
              <div className="wrapper">
                {!loading &&
                  values.map((value, index) => {
                    if (index <= 8) {
                      return (
                        <NavDropdown.Item
                          className="categoriesDropdown "
                          key={value.name}
                          href={`#${value.name}`}
                          onClick={() => {
                            navigate("/");
                          }}
                        >
                          {value.name}
                        </NavDropdown.Item>
                      );
                    }
                  })}
              </div>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/contact" className="linkHover">
              Contact
            </Nav.Link>
          </Nav>
         {showSearch && <Search />}
          <Nav.Link
            as={Button}
            variant="light"
            className="showSearchIcon"
            onClick={() => setShowSearch(!showSearch)}
          >
            {!showSearch ? <CiSearch /> : <IoMdClose />}
          </Nav.Link>
          <Nav.Link as={NavLink} to="/wishlist" className="wishlistNav">
            <TbBasketHeart />
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart" className="me-4">
            <BasketIcon cartItems={cartItems} />
          </Nav.Link>
          <NavDropdown
            title={<FaRegUserCircle />}
            id="navbarScrollingDropdown"
            className="categoriesDropdownMenu "
          >
            <NavDropdown.Item onClick={() => navigate("/login")}>
              Log in
            </NavDropdown.Item>
            <NavDropdown.Item>Dark Mode</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPage;
