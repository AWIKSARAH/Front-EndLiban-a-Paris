import { useState } from "react";
import './search.css'
export default function SearchInput(props) {
  // const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    props.setQuery(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div className="input-container">
    <input type="text" name="text" className="search--input" placeholder="search..." onChange={handleInputChange}/>
    <button className="icon"> 
      <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    </button>
  </div>
  );
}
