import  { useEffect } from 'react';
import Topbar from '../modules/Topbar';
import Body from '../modules/Body';
import "../index.scss";
const ResultPage = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <>
      <Topbar></Topbar> 
      Result
    </>
  );
};

export default ResultPage;