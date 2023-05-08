import { useEffect, useState } from "react";
import ListingCard from "../../components/listingcardEvent";
import SearchBar from "../../components/searchBar";
import axios from "axios";
import DropDown from "../../components/filter/dropDown";
import { category } from "../../common/arraysOfTheEnums/enums";
import { useParams } from "react-router-dom";
function DynamicEventPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const { type } = useParams();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemSelected = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    async function fetchEvents() {
        
      try {
        const response = await axios.get(
          `http://localhost:5000/api/events/all?page=${currentPage}&q=${selectedItem}&${type?`place_type=${type}`:""}`
        );
        // alert('Success');
        setData(response.data.data.docs);
        setPageCount(response.data.data.totalPages);
        setError(false)
        return response.data.data;
      } catch (error) {
        console.error(error);
        setError(true);
        setErrorMessage(error.response.data.message);
        throw error;
      }
    }
    fetchEvents();
  }, [currentPage, query, type, selectedItem]);

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
      <div
        style={{
          display: "flex",
          width: "70%",
          alignItems: "baseline",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          alignContent: "space-around",
          flexDirection: "row",
          gap: "50%",
        }}
      >
        <DropDown
          items={category}
          title="Category"
          onItemSelected={handleItemSelected}
        ></DropDown>
        <SearchBar setQuery={setSelectedItem}></SearchBar>
      </div>
      {!error && data && (
        <ListingCard
          pageTitle="Events"
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

export default DynamicEventPage;
