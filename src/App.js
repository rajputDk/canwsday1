import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './componet/About'
import Home from './componet/Home'
import Contact from './componet/Contact';
import Service from './componet/Service';
import Ragister from './componet/Ragister';
import Layout from './componet/frontend/Layout';



function App() {
  return (
   
    <div>
     
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/ragister"  element={<Ragister/>}/>
        </Route>
      </Routes>
   
    
    </div>
  
  );
}

export default App;
