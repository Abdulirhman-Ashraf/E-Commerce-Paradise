import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/slices/Products/productsThunk";
import "./style.css";
import { Link } from "react-router-dom";
const Search = () => {
  const dispatch = useDispatch();
  const { elements } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const [searchText, setSearchText] = useState("");
  const filteredResult =
    elements.filter((ele) =>
      ele.title.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <Form className="d-flex searchForm">
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
        {    searchText &&
          filteredResult.map((ele) => {
          return (
            <li className="col" key={ele.id}>
              <Link
                to={`products/${ele.id}`}
                className="searchResults"
                style={{ color: "#eee", textDecoration: "none" }}
                onClick={() => {
                  setSearchText("");
                }}
              >
                <h6>{searchText ? ele.title : ""}</h6>
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
