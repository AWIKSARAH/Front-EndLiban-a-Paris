import {
  useEffect,
  useState,
} from "react";
import ListingCard from "../../components/listingcard";
import fakeData from "./fakeData";
import SearchBar from "../../components/searchBar";
import axios from "axios";
function PlacesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setpageCount] = useState(1);
  const [data, setdata] = useState([]);
  const [query, setquery] = useState('');

  async function fetchPlaces(pageNumber) {
    try {
      const response = await axios.get(`http://localhost:50010/api/places/all/page=${currentPage}?title=${query}`);
      // alert('Success');
      console.log(response);
      setdata(response.data.docs)
      setpageCount(response.data.totalPages)
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  useEffect(()=>{

    fetchPlaces();
  },[currentPage,query])

  console.log("hon"+query);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "center",
        alignContent: "space-between",
        justifyContent: "flex-start",
        paddingTop: '50px'

      }}
    >
      {" "}
      <SearchBar setquery={setquery}></SearchBar>
      <ListingCard
        pageTitle="Places"
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={fakeData}
        rd={data}
        page="event"
      />
    </div>
  );
}

export default PlacesPage;
