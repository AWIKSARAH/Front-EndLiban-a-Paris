import { Outlet } from "react-router";
import "./layout.css";
import Footer from "../Footer";
import Header from "../header2";

function Layout(props) {
  return (
    <>
        <Header/>
        <main><Outlet/></main>
      <Footer/>
    </>
  );
}

export default Layout;
