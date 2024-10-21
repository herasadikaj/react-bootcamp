import React, { useEffect, useState } from 'react';

const UpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

 
    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    
    <button 
      onClick={scrollToTop} 
      style={{ display: visible ? 'block' : 'none' }} 
      id="scrollToTopBtn"> ↑ </button>
  );
};

export default UpButton;
