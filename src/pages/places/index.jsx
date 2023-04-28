import { useState } from "react";
import ListingCard from "../../components/listingcard";
import fakeData from "./fakeData";
function PlacesPage() {
  const [currentPage,setCurrentPage]=useState(1)
  return (
    <>
      <ListingCard
        pageTitle="Places"
        pageCount={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={fakeData}
      />
    </>
  );
}

export default PlacesPage;
