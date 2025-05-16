import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile.jsx";
import Portfolio from './Pages/Portfolio.jsx';
import Navbar from "./Navbar.jsx";
import Contact from './Pages/Contaxt.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
