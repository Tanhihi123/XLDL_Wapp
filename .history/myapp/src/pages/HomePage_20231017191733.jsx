import React, { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <div>
      
    </div>
  );
};

export default HomePage;