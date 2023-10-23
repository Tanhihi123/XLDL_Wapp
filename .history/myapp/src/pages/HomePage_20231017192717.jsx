import React, { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <>
    <Topbar></Topbar> 
    </>
  );
};

export default HomePage;