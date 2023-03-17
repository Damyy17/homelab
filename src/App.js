import React,{useState} from 'react'
import './scss/App.scss'
import HeaderComponent from './containers/HeaderComponent'
import MainBunner from './containers/MainBunner';
import AbsoluteBacround from './components/AbsoluteBacround';
import HomePageArticles from './containers/HomePageArticles';
import ChooseClassContainer from './containers/ChooseClassContainer';
import ArticlesPage from './containers/ArticlesPage';
import ArticlePage from './containers/ArticlePage';

function App() {
  const [typeBackround, setBackround] = useState("inactive")
  const windoPath = window.location.pathname.split("/")
  let content
  console.log(window.location.pathname)

  if(window.location.pathname === "/"){
    content = <>
    <section className='all-pages-flex'>
      <section className='main-bunner-articles-buttons'>
        <MainBunner/>
        <HomePageArticles/>
      </section>
      <ChooseClassContainer/>
    </section>
    </>
  }
  else if(window.location.pathname === "/Clasess"){

    content = <>
    <h1>Hello world</h1>
    </>
  }
else if(window.location.pathname === "/Articles"){
  content = <>
  <ArticlesPage/>
  </>
}
  else if( windoPath.length >=2){
    content = <>
    <ArticlePage windowLink={windoPath[2]}/>
    </>}
  return (
    <>
    <AbsoluteBacround setBackround={setBackround} typeBackround = {typeBackround}></AbsoluteBacround>
    <main>
      <HeaderComponent setBackround = {setBackround}/>
      {content}
    </main>
    </>
  );
}

export default App;
