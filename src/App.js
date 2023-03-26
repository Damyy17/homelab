import React from 'react'
import './scss/App.scss'
import {Routes, Route} from "react-router-dom";
import MainBunner from './containers/MainBunner';
import HomePageArticles from './containers/HomePageArticles';
import ChooseClassContainer from './containers/ChooseClassContainer';
import ArticlesPage from './containers/ArticlesPage';
import ArticlePage from './containers/ArticlePage';
import LayOut from './LayOut';

function App() {
  return (
    <>
      <Routes>
        <Route path='/homelab'
        element={<LayOut/>}
        >
          <Route path='' element={
                  <section className='all-pages-flex'>
                  <section className='main-bunner-articles-buttons'>
                    <MainBunner/>
                    <HomePageArticles/>
                  </section>
                  <ChooseClassContainer/>
               </section>
          }/>
          <Route path='/Clasess' element={
            <h1>hello world</h1>
          }/>
          <Route path='/Articles' element={<ArticlesPage/>}/>
          <Route path='/Articles/:title' element={<ArticlePage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
