import { Outlet } from "react-router";
import Nav from "../nav";
import "./layout.css";
import Header from "../header";

function Layout(props) {
  return (
    <>
        <Header/>
        <main><Outlet/></main>
      <h1>Footer</h1>
    </>
  );
}

export default Layout;
