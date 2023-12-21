import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import NewsLetter from './NewsLetter';
import TopFoods from './TopFoods';
import Feedback from './Feedback';

const Home = () => {

  const [cards,setCards] = useState()

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data => setCards(data))

    },[])

    return(
        <div>
          <Banner></Banner>
          <TopFoods cards={cards}></TopFoods>
          <Feedback></Feedback>
          <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;