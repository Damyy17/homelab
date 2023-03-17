import React, { useState } from "react";
import "../scss/Componets-scss/SearchBar.scss"

export default function SearchBar(prop) {
  const [searchBarActive, setSearchBarActive] = useState(true);
  const [sectionActive, setsectionActive] = useState(true);

  return (
    <section className={sectionActive ? "" : "active"}>
        <button className="search-icon" onClick={()=>{
         setSearchBarActive(!searchBarActive);
         setsectionActive(!sectionActive);
        }}>
        <svg viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 29.846L10.3023 18.4606" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.153 19.9652C21.0387 19.9652 24.9994 15.9435 24.9994 10.9826C24.9994 6.02164 21.0387 2 16.153 2C11.2673 2 7.30664 6.02164 7.30664 10.9826C7.30664 15.9435 11.2673 19.9652 16.153 19.9652Z" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
        <input className={`search-bar ${searchBarActive ? "" : "active"}`} id='search-bar' placeholder='Search...' type="text" />
        <button className="sign-up">Sign Up</button>
    </section>
  )
}