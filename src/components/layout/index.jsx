import { Outlet } from "react-router";
import "./layout.css";
import Header from "../header";
import Footer from "../Footer";

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
