import { useEffect, useState } from "react";
import ListingCard from "../../components/listingcard";
import SearchBar from "../../components/searchBar";
import axios from "axios";

import { useParams } from "react-router-dom";
function DynamicPlacePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const { type } = useParams();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
      async function fetchPlaces() {
        
        try {
          const response = await axios.get(
            `http://localhost:5000/api/places/all?page=${currentPage}&title=${query}&${type?`place_type=${type}`:""}`
          );
          // alert('Success');
          setData(response.data.docs);
          setPageCount(response.data.totalPages);
          setError(false)
          return response.data;
        } catch (error) {
          console.error(error);
          setError(true);
          setErrorMessage(error.response.data.message);
          throw error;
        }
      }
    fetchPlaces();
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
      {!error &&data&& (
              <ListingCard
              pageTitle={type.charAt(0).toUpperCase()+type.slice(1)}
              pageCount={pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              data={data}
              page="event"
              />
        )}


{error && <h2> ... Something Wrong {errorMessage} </h2>}
    </div>
  );
}

export default DynamicPlacePage;
