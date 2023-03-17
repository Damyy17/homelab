import React, { useState } from 'react'
import "../scss/Componets-scss/absoluteBackround.scss"
import NavBar from './NavBar'
import SearchBar from './SearchBar'
function AbsoluteBacround({typeBackround,setBackround}) {

const getTypeBackround = (value) =>{

    console.log(typeBackround)
    setBackround(value)
}

    if(typeBackround === "inactive"){
        return(
            <>
            </>
        )
    }
    if(typeBackround === "NavBar")
    {
        return(
            <div className='backround'>
                <header className='header-backround'>
                    <NavBar typeBackround={getTypeBackround} />
                    <SearchBar/>
            </header>
            </div>
        )
    }
    if(typeBackround === "alert"){
        return(
            <div className='backround'>
                Alert
            </div>
        )
    }
}

export default AbsoluteBacround