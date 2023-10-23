import  { useEffect } from 'react';
import Topbar from '../modules/Topbar';
import Body from '../modules/Body';
import "../index.scss";
const HomePage = ({children}) => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <>
      <Topbar>

      {/* <Body></Body> */}
      {children}
      </Topbar> 
    </>
  );
};

export default HomePage;