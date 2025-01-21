import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar/>
        
        {/* Content */}
        <Routes>
          <Route path="/" element={ <HomePage/> } />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;