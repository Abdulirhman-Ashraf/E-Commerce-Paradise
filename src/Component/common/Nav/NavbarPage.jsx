import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Search from "../search/Search";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../store/slices/categories/categoriesThunk";
import { useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import "./style.css";
import { NavLink } from "react-router-dom";
import BasketIcon from "../../ecommerce/basketIcon/BasketIcon";
const NavbarPage = () => {
  const dispatch = useDispatch();
  const { values, loading } = useSelector((state) => state.categories);
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [showSearch, setShowSearch] = useState(false);
  return (
    <Navbar expand="lg" className=" navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <h1 >Paradise</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0" navbarScroll >
            <Nav.Link as={NavLink} to="/" className="linkHover">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products"  className="linkHover">
              Products
            </Nav.Link>
            <NavDropdown
              title="Categories"
              id="navbarScrollingDropdown"
              className="categoriesDropdownMenu linkHover"
            >
              {loading && (
                <NavDropdown.Item disabled>
                  <Container>Loading ....</Container>
                </NavDropdown.Item>
              )}
              <div className="wrapper">
                {!loading &&
                  values.map((value) => {
                    return (
                      <NavDropdown.Item
                        className="categoriesDropdown "
                        key={value.name}
                        href={`#${value.name}`}
                        
                      >
                        {value.name}
                      </NavDropdown.Item>
                    );
                  })}
              </div>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/contact"  className="linkHover">
              Contact
            </Nav.Link>
          </Nav>
          {showSearch && <Search />}
          <Button
            variant="light"
            className="showSearchIcon"
            onClick={() => setShowSearch((prev) => !prev)}
          >
            {!showSearch ? <CiSearch /> : <IoMdClose />}
          </Button>
          <Nav.Link as={NavLink} to="/cart" >
            <BasketIcon cartItems={cartItems}/>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPage;
