
import { Routes,Route } from "react-router-dom";
import Home from './Home';
import NavScrollExample from "./Header";
import About from "./About";
import Review from "./Reviews";
import Footer from "./Footer";
import FormExample from "./Contact";

function App() {
  return (
    <div className="App">
 <NavScrollExample/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/review" element={<Review/>}/>
  <Route path="/contact" element={<FormExample/>}/>
  <Route path="*" element={<Review/>}/>
 
</Routes>
<Footer/>
    </div>
   
  );
}

export default App;
