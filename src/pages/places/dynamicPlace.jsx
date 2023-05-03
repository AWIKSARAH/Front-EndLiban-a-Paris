import {
    useEffect,
    useState,
  } from "react";
  import ListingCard from "../../components/listingcard";
  import fakeData from "./fakeData";
  import SearchBar from "../../components/searchBar";
  import axios from "axios";
import { useParams } from "react-router-dom";
  function DynamicPlacePage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setpageCount] = useState(1);
    const [data, setdata] = useState([]);
    const [query, setquery] = useState('');
  const {type}= useParams()
    async function fetchPlaces() {
      console.log("helloe type"+type);
      try {
        const response = await axios.get(`http://localhost:5000/api/places/all?page=${currentPage}&title=${query}&place_type=${type}`);
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
    },[currentPage, query, type])
  
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
          data={data}
          page="event"
        />
      </div>
    );
  }
  
  export default DynamicPlacePage;
  