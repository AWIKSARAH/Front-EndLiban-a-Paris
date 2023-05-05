import { useEffect, useState } from "react";
import ListingCard from "../../components/listingcard";
import SearchBar from "../../components/searchBar";
import axios from "axios";

import { useParams } from "react-router-dom";
function DynamicPlacePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [data, setdata] = useState([]);
  const [query, setQuery] = useState("");
  const { type } = useParams();
  const [error, setError] = useState(false);
  const [errorMessage, setresponse] = useState("");

  async function fetchPlaces() {
    console.log("helloe type" + type);
    // if(type === undefined) {return type = null;}
    // console.log("helloe 2" + type);
    
    try {
      const response = await axios.get(
        `http://localhost:5000/api/places/all?page=${currentPage}&title=${query}&${type?`place_type=${type}`:""}`
      );
      // alert('Success');
      console.log(response);
      setdata(response.data.docs);
      setPageCount(response.data.totalPages);
      setError(false)
      return response.data;
    } catch (error) {
      console.error(error);
      setError(true);
      setresponse(error.response.data.message);
      throw error;
    }
  }
  useEffect(() => {
    fetchPlaces();
  }, [currentPage, query, type]);

  console.log("hon" + query);
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
              <ListingCard
              pageTitle="Places"
              pageCount={pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              data={data}
              page="event"
              />
        )}

<<<<<<< HEAD
          {error&&<h2> ... Somthing Wrong {res}  </h2>}
=======
{error && <h2> ... Something Wrong {errorMessage} </h2>}
>>>>>>> blogpost
    </div>
  );
}

export default DynamicPlacePage;
