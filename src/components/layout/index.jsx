import "./layout.css";

function Layout(props) {
  return (
    <>
      <h1>Header</h1>
        <main>{props.children}</main>
      <h1>Footer</h1>
    </>
  );
}

export default Layout;
