import React from 'react'
import { useRef } from 'react';
import Hero from '../components/Hero/Hero.jsx';
import Popular from '../components/Popular/Popular.jsx';
import Offer from '../components/Offer/Offer.jsx';
import NewCollection from '../components/NewCollections/NewCollection.jsx';
import NewsLetter from '../components/NewsLetter/NewsLetter.jsx'

function Home () {
  const newCollectionRef = useRef(null);

  const scrollToNewCollection = () => {
    newCollectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Hero scrollToNewCollection={scrollToNewCollection}/>
      <Popular/>
      <Offer/>
      <div ref={newCollectionRef}>
        <NewCollection />
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Home;