import React, { useEffect } from 'react';
import Topbar from '../modules/Topbar';

const HomePage = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <>
      <Topbar></Topbar> 
      <Body></Body>
    </>
  );
};

export default HomePage;