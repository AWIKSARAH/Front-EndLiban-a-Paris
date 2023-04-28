import { Outlet } from "react-router";
import Nav from "../nav";
import "./layout.css";

function Layout(props) {
  return (
    <>
        <Nav/>
        <main><Outlet/></main>
      <h1>Footer</h1>
    </>
  );
}

export default Layout;
