import React, { useEffect } from "react";
import "./cards.css";
import { useState } from "react";
import { Pagination } from "@mui/material";
import Card from "./cards";
import { get } from "../../common/axios";
import SearchBar from "../../components/searchBar";
import { useParams } from "react-router";

function Cards() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setResponse] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const {type}=useParams()

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  
  useEffect(() => {
    async function getDataBlog() {
      try {
        const params = { page: currentPage, title: query ,type:type};
        const response = await get("blog", params);
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
        setError(true);
  
        return error.response.data.message;
      }
    }
    getDataBlog();
  }, [currentPage, query, type]);

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
      {!error && data&&(
        <div className="card--listing_container2">
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
                key={blogs._id}
                  imageSrc={blogs.image.startsWith("http")?blogs.image:`http://localhost:5000${blogs.image}`}
                  imageAlt={blogs.title}
                  title={blogs.title}
                  height={300}
                  width={300}
                  description={blogs.description}
                  _id={blogs._id}
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
      {error && <h2> ... Something Wrong {errorMessage} </h2>}
    </div>
  );
}

export default Cards;
