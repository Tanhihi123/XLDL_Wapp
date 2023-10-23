import { useEffect } from "react";
import Topbar from "../modules/Topbar";
import Body from "../modules/Body";
import "../index.scss";
import Layout from "../components/layout/Layout";
const HomePage = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <>
      <Top>
        <Body></Body>
      </T>
    </>
  );
};

export default HomePage;
