import React,{useState,useRef, useLayoutEffect} from 'react'
import "../scss/Componets-scss/ArticleBlock.scss"
import Article from "../Assets/JSON/Article.json"
import Lottie from 'lottie-react'
import Articles from '../Assets/Articles'

function ArticleBlocks({articleVisibleValue,articleWidthValue,articleType,number}) {

    const lottieRef = useRef(null)
    const articleRef = useRef(0)
    const [articleWidth, setArticleWidth] = useState(0)
    useLayoutEffect(()=>{
        setArticleWidth(
            articleRef.current.offsetWidth
        )
    }, [])
    articleWidthValue(articleWidth)
    const [articleActive, setArticleActive] = useState(NaN)
    const articleActiveFunction = (index) =>{
    if(index === articleActive){
        return "active"
    }else{
        return ""
    }
}

    const articleVisible = (index) =>{
        if (index === articleVisibleValue.find(el=> el === index)){
            return"visible"
        }
        else if(articleVisibleValue === "all"){
            return"visible"

        }
        else{
            return"invisible"
        }
    }
  return (
    <>
    {Articles.slice(0,number).map((item,  Index)=>{
        if(item.types.find((x)=> x === articleType)){
        return(
        <article ref={articleRef} className={`${articleActiveFunction(Index)} ${articleVisible(Index)}`} key={Index}>
            <div 
            className="article-decoration-blocks">
                <svg className={`pen ${articleActiveFunction(Index)}`}  width="85" height="66" viewBox="0 0 85 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M72.8887 48.5915L14.7148 6.57275L8.9741 14.5207L67.148 56.5394L72.8887 48.5915Z" fill="#A66CFF"/>
                    <path d="M14.7148 6.57262L3.06791 5.53476L8.97406 14.5205L14.7148 6.57262Z" fill="#6951AF"/>
                    <path d="M84.7639 56.3824L73.2617 48.0745L66.8209 56.9916L78.323 65.2996L84.7639 56.3824Z" fill="#6951AF"/>
                </svg>
                <div className={`decoration-text-block ${articleActiveFunction(Index)}`}>
                    {item.content}
                </div>
                <div className={`decoration-cirlces-block ${articleActiveFunction(Index)}`}>
                    <span></span> <span></span> <span></span> 
                </div>
            </div>
            <div className={`main-article-block ${articleActiveFunction(Index)}`}
            onMouseOverCapture={()=>{
                setArticleActive(Index)
            }}
            onMouseLeave={()=>{
                setArticleActive(NaN)
            }}
            onClick={
                ()=>{
                    window.location.pathname = "Articles/" + item.link                }
            }>
                <div className="article-circle">
                    <Lottie
                    lottieRef={lottieRef}
                    autoPlay={false}
                    loop={false}
                    animationData={Article}
                    direction={-1}
                    />
                </div>
                <div className="article-content">
                    <div className="name-button">
                        <article>
                            {item.title}
                        </article>
                        <button>
                        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.295 2C36.1346 3.10187 44.5957 12.2573 44.5957 23.388C44.5957 35.2623 34.97 44.888 23.0957 44.888C11.2214 44.888 1.5957 35.2623 1.5957 23.388C1.5957 16.1183 5.20143 9.69521 10.7242 5.80281" stroke="#161616" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.5664 3.50497C16.7668 2.96299 18.0299 2.52851 19.3379 2.21497" stroke="#A66CFF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.38737 17.3993L25.6399 17.5203V10.5104L40.3405 23.276L26.0072 36.2656V27.2535H2.93945" stroke="#161616" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </button>
                    </div>
                    <div className="types-date">
                        <div className="types">
                            {item.types.map((type, Index)=>{
                                return(
                                    <span key={Index} className={type}></span>
                                )
                            })}
                        </div>
                        <span className="date">{item.date}</span>
                    </div>
                </div>
            </div>
        </article>
        )
    }})}
    </>
  )
}

export default ArticleBlocks