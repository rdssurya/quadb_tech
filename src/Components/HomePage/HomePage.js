import React, { useEffect, useState } from 'react';
import './HomePage.css';
import ShowCard from '../ShowCard/ShowCard';


const HomePage = () => {
  const [showsList, setShowsList] = useState([]);

  useEffect(()=>{
    fetchShowsList();
  },[]);

  async function fetchShowsList(){
    try{
      const results = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await results.json();
      setShowsList(data);
    } 
    catch(e){
      console.error(e);
    }
  }

  return (
    <>
      <div className='header'>Welcome To Quad Tech Shows</div>
      <div className='shows-list'>
        {showsList.map((item) => (
          <ShowCard 
            key={item.show.id}
            name={item.show.name} 
            language={item.show.language} 
            imgUrl={item.show.image?.medium}
            rating={item.show.rating.average}
          />
        ) )}
      </div>
    </>
  );
};

export default HomePage;