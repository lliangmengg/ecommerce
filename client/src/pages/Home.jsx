import React from 'react'
import Hero from '../components/Hero/Hero.jsx';
import Popular from '../components/Popular/Popular.jsx';
import Offer from '../components/Offer/Offer.jsx';
import NewCollection from '../components/NewCollections/NewCollection.jsx';
import NewsLetter from '../components/NewsLetter/NewsLetter.jsx'
import Footer from '../components/Footer/Footer.jsx'

function Home () {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection />
      <NewsLetter/>
    </div>
  )
}

export default Home;