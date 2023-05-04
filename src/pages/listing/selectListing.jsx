import React, { useEffect } from "react";
import "./cards.css";
import { useState } from "react";
import { Pagination } from "@mui/material";
import Card from "./cards";
import { get } from "../../common/axios";
import SearchBar from "../../components/searchBar";

function Cards() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setResponse] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [pageCount, setPageCount] = useState(1);

  const handlePageChange = (event, value) => {
    console.log(value);
    setCurrentPage(value);
  };

  async function fetchPlaces() {
    try {
      const params = { page: currentPage, title: query };
      const response = await get("blog", params);
      console.log(response);
      setData(response.data.docs);
      setPageCount(response.data.totalPages);
      setError(false);
      return response.data;
    } catch (error) {
      setError(true);
      if (error.response) {
        setResponse(error.response.data.message);
      } else {
        setResponse(error.message);
      console.log(error);

      }
      return error.response.data.message;
    }
  }

  useEffect(() => {
    fetchPlaces();
  }, [currentPage, query]);

  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "center",
        alignContent: "space-between",
        justifyContent: "flex-start",
        paddingTop: "50px",
      }}
    >
      {" "}
      <SearchBar setQuery={setQuery}></SearchBar>
      {!error && (
        <div className="card--listing_container">
          <h2>Blogs</h2>
          <Pagination
            shape="rounded"
            color="success"
            page={currentPage}
            count={pageCount || 1}
            showFirstButton
            showLastButton
            size="small"
            onChange={handlePageChange}
          />
          <div className="cards">
            {data.map((blogs) => {
              return (
                <Card
                  imageSrc={`http://localhost:5000/${blogs.image}`}
                  imageAlt={blogs.image}
                  title={blogs.title}
                  description={blogs.description}
                />
              );
            })}
          </div>
          <div className="card--listing_footer">
            <Pagination
              shape="rounded"
              color="success"
              page={currentPage}
              count={pageCount || 1}
              showFirstButton
              showLastButton
              size="large"
              onChange={handlePageChange}
            />
          </div>
        </div>
      )}
      <h2> ... Somthing Wrong {errorMessage} </h2>
    </div>
  );
}

export default Cards;
