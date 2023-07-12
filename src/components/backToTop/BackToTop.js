import React, {useState, useEffect} from 'react';

import "./TopButton.css"

export const TopButton = () =>{
  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400){
      setShowScroll(true)
    } else if (showScroll && window.scrollY <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <button className= "TopButton" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}>
        <div className='arrowUp'></div>
    </button>
  );
}

export default TopButton;