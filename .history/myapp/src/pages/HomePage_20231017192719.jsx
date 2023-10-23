import React, { useEffect } from 'react';
import Topbar from '../modules/Topbar';

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