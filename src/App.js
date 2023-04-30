import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRouts from "./components/routes";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < Footer />
        {/* <AllRouts /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
