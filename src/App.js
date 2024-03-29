import './App.css';
import React from 'react';
import { useState, useEffect,useRef } from 'react';
import Products from './Products';

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([]);
  const searchRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    // searchRef.current.value = "";
    console.log(searchRef.current.value);
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${search}&apiKey=ab82275366c843b18e62549ac336d5be`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data.articles)
      setData(data.articles);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    // searchRef.current.value = "";
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ab82275366c843b18e62549ac336d5be')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data.articles)
        setData(data.articles);
      })
      .catch((err) => {
        console.log(err)
      })
  },[])


  return (
    <div className='news-app'>
      <div className='search-here'>
        <h1 className='title'>News App Using API</h1>
        <form onSubmit={submitHandler} className='search-form'>
          <input type='text' className='search-bar' ref={searchRef} placeholder="Enter Category like sports,business.." value={search} onChange={(e) => setSearch(e.target.value)} /><br />
          <input className='search-button' type='submit' value='Search' />
        </form>
      </div>
      {data.length >= 1 ? <Products data={data} /> : (<h1 className='data-not-avail'>Data Not Available</h1>)}
    </div>
  );
}

export default App;
