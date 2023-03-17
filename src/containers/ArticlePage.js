import React from 'react'
import Articles from '../Assets/Articles'
import "../scss/Containers-scss/ArticlePage.scss"
import ArticleBlockActive from "../Assets/ArticleBlockActive.svg"

function ArticlePage({windowLink}) {
    console.log(windowLink)
  return (
    <>
    {Articles.map((item,Index)=>{
        if(item.link === windowLink){
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
                </section>
            )
        }
    })}
    </>
  )
}

export default ArticlePage