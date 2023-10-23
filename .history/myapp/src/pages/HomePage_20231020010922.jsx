import  { useEffect } from 'react';
import Topbar from '../modules/Topbar';
import Body from '../modules/Body';
import "../index.scss";
const HomePage = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <>
      <Topbar>

      <Body></Body>
      </Topbar> 
    </>
  );
};

export default HomePage;