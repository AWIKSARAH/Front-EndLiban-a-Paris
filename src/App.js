
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import ContactUs from './components/contact';
import AllRouts from './components/routes';
function App() {
  return (
     <BrowserRouter >
     {/* <Nav />
     <AllRouts /> */}
     <ContactUs></ContactUs>
     </BrowserRouter>
  );
}

export default App;
