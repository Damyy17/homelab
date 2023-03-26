import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Articles from '../Assets/Articles'
import "../scss/Containers-scss/ArticlePage.scss"

function ArticlePage() {

    // const [articleHistoryValue, setArticleHistoryValuie] = useState([])
    // useEffect(()=>{
    //     const valuie = JSON.parse(localStorage.getItem("historyValue"))
    //     setArticleHistoryValuie(valuie)
    // },[setArticleHistoryValuie])
    const {title} = useParams()
    console.log(title)
  return (
    <>
    {Articles.map((item,Index)=>{
        if(item.link === title){
            return(
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
                    <section className='histoty-section'>
                    </section>
                </section>
            )
        }
    })}
    </>
  )
}

export default ArticlePage