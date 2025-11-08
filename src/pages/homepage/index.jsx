import React from 'react'
import CreateMusicSection from '../../component/homepage/CreateMusicSection';
import ProductServiceSection from '../../component/homepage/ProductServiceSection';
import NewsArticleSection from '../../component/homepage/NewsArticleSection';
import TrustedByArtist from '../../component/homepage/TrustedByArtist';

const HomePage = () => {
  return (
    <div className='w-full lg:pl-20'>
      <CreateMusicSection />
      <ProductServiceSection/>
      <NewsArticleSection/>
      <TrustedByArtist/>
    </div>
  )
}

export default HomePage;