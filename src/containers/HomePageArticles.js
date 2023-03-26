import React,{useEffect, useLayoutEffect, useRef, useState} from 'react'
import ArticleBlocks from '../components/ArticleBlocks'
import "../scss/Containers-scss/HomePageArticles.scss"


function HomePageArticles() {
const articleMainBlock = useRef(null)
const [moveValuie, setMoveValuie] = useState(0)
const [articleValue, setArticoleValuie] = useState(0)
const [mainBlockValue, setMainBockValuie] = useState(0)
const setValue = (articleWidthValue) =>{
        setArticoleValuie(articleWidthValue)
}
const[WindowWidth, setWindowWidth] = useState( window.innerWidth)
useEffect(()=>{
  function resizeWindow(){
    setWindowWidth((value)=> value = window.innerWidth)
    console.log(WindowWidth)
  }
  window.addEventListener("resize",resizeWindow)
})
useLayoutEffect(()=>{
  setMainBockValuie(
    articleMainBlock.current.offsetWidth)
  },[])
  
  var numberOfActive = parseInt((mainBlockValue)/(articleValue+30)) 
  if(WindowWidth<1000){
    numberOfActive = parseInt((mainBlockValue)/(articleValue)) 
  }
  const [numberOfActiveArrState, setNumberOfArtiveArrState]= useState([])
  console.log(numberOfActive)
  useEffect(()=>{
      console.log("Hello world")
      for(let i = 0; i < numberOfActive; i+=1){
        console.log("merge")
        setNumberOfArtiveArrState((current)=>[...current, i])
      }
  },[numberOfActive])
  console.log(numberOfActiveArrState)

  return (
    <section ref={articleMainBlock} className='Home-page-articles-slider'>
        <div className='main-text-buttons'>
            <span>
            The most Popular <b>Articles</b> 
            </span>
            <div className="buttons">
                <button
                onClick={()=>{
                  setMoveValuie((valuie)=>{
                    if(valuie === 0){
                      return 0 
                    }else{
                      return valuie = valuie + 1
                    }
                    })
                  setNumberOfArtiveArrState((currentValuie)=>{
                    return currentValuie = currentValuie.map((item)=>{
                      if(numberOfActiveArrState[0] <= 0){
                        return item 
                      }
                      else{
                        return item = item - 1
                      }
                    })
                  })
                }}
                >
                <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.259 27.5172C7.21257 27.5172 1.50034 21.805 1.50034 14.7586C1.50034 7.71223 7.21257 2 14.259 2C21.3053 2 27.0176 7.71223 27.0176 14.7586C27.0176 21.805 21.3053 27.5172 14.259 27.5172Z" stroke="#A66CFF" stroke-width="2.06897" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17.4316 9.0061L9.76252 14.4882L17.4316 20.5098" stroke="#A66CFF" stroke-width="2.06897" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
                <button
                onClick={()=>{
                  setMoveValuie((valuie)=>{
                    if(valuie === 8){
                      return 8
                    }else{
                      return valuie = valuie - 1
                    }})
                  setNumberOfArtiveArrState((currentValuie)=>{
                    return currentValuie = currentValuie.map((item)=>{
                    if(numberOfActiveArrState[numberOfActiveArrState.length-1] >= 8){
                      return item
                    }
                    else{
                      return item = item + 1
                    }
                  })})
                }}
                >
                <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.741 27.5172C21.7874 27.5172 27.4997 21.805 27.4997 14.7586C27.4997 7.71223 21.7874 2 14.741 2C7.69465 2 1.98242 7.71223 1.98242 14.7586C1.98242 21.805 7.69465 27.5172 14.741 27.5172Z" stroke="#A66CFF" stroke-width="2.06897" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.5684 9.0061L19.2375 14.4882L11.5684 20.5098" stroke="#A66CFF" stroke-width="2.06897" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
            </div>
        </div>
        <div
        className='all-articles-blocks'
        style={{
          transform : `translateX(${moveValuie*(articleValue+30)}px)`
      }}
        >
        <ArticleBlocks 
        articleVisibleValue={numberOfActiveArrState} 
        articleWidthValue={setValue} 
        number={undefined} 
        articleType={"home"}></ArticleBlocks>
        </div>
    </section>
  )
}

export default HomePageArticles