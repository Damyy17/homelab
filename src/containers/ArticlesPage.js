import React,{useState} from 'react'
import ArticleBlocks from '../components/ArticleBlocks'
import "../scss/Containers-scss/ArticlesPage.scss"

function ArticlesPage() {
    const [articelWidth, setArticleWidth] = useState(320)
  return (
    <div className='articles-containe-buttons'>
        <p>our Most Popular <b>Articles</b> </p>
        <section className='artices-container'>
            <ArticleBlocks
            articleVisibleValue={[0,1,2,3,4,5,6,7,8.9]}
            articleWidthValue={setArticleWidth}
            articleType={undefined}
            number={undefined}
            />
        </section>
    </div>
  )
}

export default ArticlesPage