import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "../scss/Containers-scss/ChooseClassContainer.scss"
import {ReactComponent as Biology} from "../Assets/ClassBlocks/Biology.svg"
import {ReactComponent as Chemistry} from "../Assets/ClassBlocks/Chemistry.svg"
import {ReactComponent as Physics} from "../Assets/ClassBlocks/Physics.svg"
import {ReactComponent as CS} from "../Assets/ClassBlocks/CS.svg"

function ChooseClassContainer() {
    const [ClassStateActive, setClassStateActive] = useState(NaN)
    const [classState, setClassState] = useState("none")
    function buttonActive (index){
        if(ClassStateActive === index ){return"active"}
        else{return""}
    }
    function classBlockActive(){
      if(classState === "none"){return ""}
      else{return "active"}
    }
    const classButtons = [
        {
            class: "6-th Grade",
            link: "6-th-Grade"
        },
        {
            class: "7-th Grade",
            link: "7-th-Grade"
        },
        {
            class: "8-th Grade",
            link: "8-th-Grade",
        },
        {
            class: "9-th Grade",
            link: "9-th-Grade",
        },
        {
            class: "10-th Grade",
            link: "10-th-Grade",
        },
        {
            class: "11-th Grade",
            link: "11-th-Grade",
        }
    ]
  return (
    <section className='choose-class-container'>
        <p> <b>Choose </b>  your favorite Subject </p>
        <article>This is our feedback form the customers who used our kits and website service  </article>
        <div className="class-buttons">
            {classButtons.map((item,index)=>{
                return(
                    <button
                    onClick={()=>{
                      setClassStateActive(index)
                      setClassState(item.link)
                    }}
                    className={buttonActive(index)}
                    >{item.class}</button>
                )
            })}
        </div>
    <section className="disciplines-block">
    <Link className={`discipline ${classBlockActive(classState)}`} 
    to={`Classes/Chemistry/${classState}`}>
      <p>Chemistry</p>
      <Chemistry/>
    </Link>
    <Link className={`discipline ${classBlockActive(classState)}`} 
    to={`Classes/Physics/${classState}`}>
      <p>Physics</p>
      <Physics/>
    </Link>
    <Link className={`discipline ${classBlockActive(classState)}`} 
    to={`Classes/Biology/${classState}`}>
      <p>Biology</p>
      <Biology/>
    </Link>
    <Link className={`discipline ${classBlockActive(classState)}`} 
    to={`Classes/CS/${classState}`}>
      <p>CS</p>
      <CS/>
    </Link>
  </section>
    </section>
  )
}

export default ChooseClassContainer