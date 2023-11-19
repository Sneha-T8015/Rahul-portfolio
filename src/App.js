import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"

import "./App.css"


function App() {

  return (
    <Router basename="/Rahul-portfolio">
     
      <Routes>
        <Route path="/" element={<Home />} />
       
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
export default App;