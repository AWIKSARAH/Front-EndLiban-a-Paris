import { useEffect, useState } from "react";
import ListingCard from "../../components/listingcard";
import SearchBar from "../../components/searchBar";
import axios from "axios";

import { useParams } from "react-router-dom";
function DynamicPlacePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setpageCount] = useState(1);
  const [data, setdata] = useState([]);
  const [query, setquery] = useState("");
  const { type } = useParams();
  const [error, seterror] = useState(false);
  const [res, setresponse] = useState("");

  async function fetchPlaces() {
    console.log("helloe type" + type);
    try {
      const response = await axios.get(
        `http://localhost:50010/api/places/all?page=${currentPage}&title=${query}&place_type=${type}`
      );
      // alert('Success');
      console.log(response);
      setdata(response.data.docs);
      setpageCount(response.data.totalPages);
      seterror(false)
      return response.data;
    } catch (error) {
      console.error(error);
      seterror(true);
      setresponse(error.response.data.message);
      throw error;
    }
  }
  useEffect(() => {
    fetchPlaces();
  }, [currentPage, query, type,res]);

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
      <SearchBar setquery={setquery}></SearchBar>
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

          <h2> ... Somthing Wrong {res}  </h2>
    </div>
  );
}

export default DynamicPlacePage;
