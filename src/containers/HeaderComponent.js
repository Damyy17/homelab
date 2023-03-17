import React,{useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import "../scss/Containers-scss/HeaderComponet.scss"

function HeaderComponent({setBackround}) {
  const[WindowWidth, setWindowWidth] = useState( window.innerWidth)
  useEffect(()=>{
    function resizeWindow(){
      setWindowWidth((value)=> value = window.innerWidth)
      console.log(WindowWidth)
    }
    window.addEventListener("resize",resizeWindow)
  })
  
  if(WindowWidth < 1440){
    console.log("merge")
    return (
      <header>
          <button onClick={()=>setBackround("NavBar")} className='burger'>
            <span></span>
            <span></span>
            <span></span>
          </button>
      </header>
    )
  }
  else{
    return(
    <header>
          <NavBar/>
          <SearchBar/>
      </header>
    )
  }
}

export default HeaderComponent