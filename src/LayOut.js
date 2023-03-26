import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import AbsoluteBacround from './components/AbsoluteBacround'
import HeaderComponent from './containers/HeaderComponent'

function LayOut() {
const [typeBackround, setBackround] = useState("inactive")
  return (
    <>
    <AbsoluteBacround setBackround={setBackround} typeBackround = {typeBackround}></AbsoluteBacround>
    <main>
      <HeaderComponent setBackround = {setBackround}/>
      <Outlet/>
    </main>
    </>
  )
}

export default LayOut