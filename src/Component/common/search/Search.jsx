import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/slices/Products/productsThunk";
import "./style.css";
import { Link } from "react-router-dom";
const Search = () => {
  const dispatch = useDispatch();
  const { elements } = useSelector((state) => state.products);
  useEffect(() => {
    if (elements.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, elements.length]);
  const [searchText, setSearchText] = useState("");
  let filteredResult = [];
  if (searchText !== "") {
    filteredResult = elements.filter((ele) =>
      ele.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <Form
      className="d-flex searchForm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2 searchField"
        aria-label="Search"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      <ul className="row-12 searchResultBox">
        {searchText &&
          filteredResult.map((ele) => {
            return (
              <li className="col" key={ele.id}>
                <Link
                  to={`/products/${ele.id}`}
                  className="searchResults"
                  style={{ color: "#eee", textDecoration: "none" }}
                  onClick={() => {
                    setSearchText("");
                  }}
                >
                  <h6>{ ele.title} </h6>
                </Link>
              </li>
            );
          })}
        {!searchText && ""}
      </ul>
    </Form>
  );
};

export default Search;
