import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import AbsoluteBacround from './components/AbsoluteBacround'
import HeaderComponent from './containers/HeaderComponent'
import Footer from './containers/Footer'

function LayOut() {
const [typeBackround, setBackround] = useState("inactive")
  return (
    <>
    <AbsoluteBacround setBackround={setBackround} typeBackround = {typeBackround}></AbsoluteBacround>
    <main>
      <HeaderComponent setBackround = {setBackround}/>
      <Outlet/>
    <Footer/>
    </main>
    </>
  )
}

export default LayOut