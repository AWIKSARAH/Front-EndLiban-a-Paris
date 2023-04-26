
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import AllRouts from './components/routes';
function App() {
  return (
    <div className="App">
     <BrowserRouter >
     <Nav />
     <AllRouts />
     </BrowserRouter>
    </div>
  );
}

export default App;
