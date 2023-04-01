import React, { useState,useRef} from "react";
import { Link } from "react-router-dom";
import Articles from "../Assets/Articles";
import "../scss/Componets-scss/SearchBar.scss"

export default function SearchBar() {
  const [searchBarActive, setSearchBarActive] = useState(true);
  const [sectionActive, setsectionActive] = useState(true);
  const sectionWidth = useRef(NaN)
  const [searchWidth, setSearchWidth] = useState(0)

  const [query, setQuery] = useState("")
  const getItemsQuery = (query, items) =>{
  if(!query) {
    return []
  }
  return items.filter((song) => song.searchTags.includes(query))
}
const filtreItems = getItemsQuery(query, Articles)

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
    <section ref={sectionWidth} className={`search-bar-section ${sectionActive ? "" : "active"}`}>
        <button className="search-icon" onClick={()=>{
         setSearchBarActive(!searchBarActive);
         setsectionActive(!sectionActive);
        }}>
        <svg viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 29.846L10.3023 18.4606" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.153 19.9652C21.0387 19.9652 24.9994 15.9435 24.9994 10.9826C24.9994 6.02164 21.0387 2 16.153 2C11.2673 2 7.30664 6.02164 7.30664 10.9826C7.30664 15.9435 11.2673 19.9652 16.153 19.9652Z" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
        <input
        onClick={()=>{
          setSearchWidth((prev)=> prev = sectionWidth.current.offsetWidth)
        }}
        className={`search-bar ${searchBarActive ? "" : "active"}`} 
        id='search-bar' 
        placeholder='Search...' 
        onChange={(el)=> setQuery(prev => prev = el.target.value)}
        type="text"
        />
        <button className="sign-up">Sign Up</button>
    </section>
    <div className="main-search-items-div">
      <section style={{width: `${searchWidth}px`}} className="search-items-section">
        <div className={`search-all-items ${searchBarActive ? "" : "active"}`}>
          {filtreItems.slice(0,4).map((item, index)=>{
            return(
              <Link to={`Articles/${item.link}`} key={index} className="search-item">
                <div className={`search-item-content ${searchBarActive ? "" : "active"}`}>
                  <p>{item.title}</p>
                  <div className="search-item-tags">
                    {item.types.map((type, index)=>{
                      return(
                        <span>#{item.types[index]}</span>
                      )
                    })}
                  </div>
                </div>
                <div className="search-img-block">
                  
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
    </div>
  )
}