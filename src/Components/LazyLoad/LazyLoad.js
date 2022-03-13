import React from 'react';
import './LazyLoad.css'

const LazyLoad = () => {
  return <div className='Lazy'>
      <header className='Lazy-header '>
     <img src='https://media.giphy.com/media/GLSIikXeNuGigKpPg9/giphy.gif' alt={'logo'} height="80px" className='Lazy-logo'></img>
     </header>
  </div>;
};

export default LazyLoad;