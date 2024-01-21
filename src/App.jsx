

import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import News from './News'

function App() {

  let[articles,setArticles] = useState([]);
  let[category,setCategory] = useState('India')
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-1-19&apiKey=31e16ef95a0f4447afddb9556d932941`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles)
      console.log(articles);
    })
    .catch((err)=>{
      console.log(err)
    })

  },[category])

  return (
    <>
      <div>
      <header className='header'>
        <h1>Parso Tak</h1>
        <input type='text'onChange={(event)=>{
          if(event.target.value!==""){
            setCategory(event.target.value)

          }else{
            setCategory("India")
          }
          }} placeholder='Search News'/>
      </header>
      <section className='news-articles'>
      {
        articles.length!==0?
        articles.map((article)=>{
          return(
            <News article={article} />
          )
          
        })
        :
          <h3>No News Found For Searched Text</h3>
      }
      
      
      </section>
      </div>
            
    </>
  )
}

export default App
