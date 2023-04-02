import React,{useState, useEffect,useRef} from 'react'
import { useParams } from 'react-router-dom'
import Articles from '../Assets/Articles'
import "../scss/Containers-scss/ArticlePage.scss"
import { useLocation } from 'react-router-dom'
import HistoryArticles from '../components/HistoryArticles'

function ArticlePage() {
    // useEffect(()=>{
    //     const valuie = JSON.parse(localStorage.getItem("historyValue"))
    //     setArticleHistoryValuie(valuie)
    // },[setArticleHistoryValuie])
    const historyValueRef = useRef([])
    useEffect(()=>{
        const valuie = JSON.parse(localStorage.getItem("items"))
        console.log(valuie)
        historyValueRef.current = JSON.parse(localStorage.getItem("items"))
        historyValueRef.current.push(Articles.findIndex(el => el.link === title))
        localStorage.setItem("items", JSON.stringify(historyValueRef.current))
        console.log(historyValueRef.current)
    },[])
    const {title} = useParams()
  return (
    <>
    {Articles.map((item,Index)=>{
        if(item.link === title){
            return(
                <>
                <section className='article-page-container'>
                    <section className="title-short-text">
                        <div className="title-links">
                            <div className="links-conatainer">
                                {item.types.map((type)=>{
                                    return(
                                        <a href={`/${type}`}>
                                            #{type}
                                        </a>
                                    )
                                })}
                            </div>
                        <p>
                            {item.title}
                        </p>
                        <article>
                            {item.shortText}
                        </article>
                        </div>
                    </section>
                    <section className='more-information-container'>
                        <div className="text-block">
                            <span>
                            Experiment Explanation
                            </span>
                            <article>
                                {item.explainText}
                            </article>
                        </div>
                        <div className="text-block">
                            <span>
                            Important notes
                            </span>
                            <article className='black-theme'>
                                {item.alert}
                            </article>
                        </div>
                    </section>
                </section>
                    <section className='histoty-section'>
                        <p> <b>Your</b> Articles History</p>
                        <div className="last-articels-history">
                        <HistoryArticles/>
                        </div>
                    </section>
                </>
            )
        }
    })}
    </>
  )
}

export default ArticlePage