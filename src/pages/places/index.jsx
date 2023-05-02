import { useEffect, useState } from "react";
import ListingCard from "../../components/listingcard";
import fakeData from "./fakeData";
import axios from "axios";
function PlacesPage() {
 
  const [currentPage,setCurrentPage]=useState(1)
  useEffect(()=>{
    axios.get(`/place?page=${currentPage}`)
  },[currentPage])
  return (
    <>
      <ListingCard
        pageTitle="Places"
        pageCount={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={fakeData}
        page='event'
      />
    </>
  );
}

export default PlacesPage;
