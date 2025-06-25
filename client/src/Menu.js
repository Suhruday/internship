import './App.css';
import {React,useState} from 'react';
import { Link,Route,Routes,BrowserRouter } from 'react-router-dom';
import Home1 from './Home1';
import Adf from './Adf';
import Delf from './Delf';
import Getf from './Faclog';
import Dels from './Dels';
import Gets from './Gets';
import Content from './Content';
import Ads from './Ads';

function Menu() {
  return (
    <BrowserRouter>
  <div className="menu" >
      <div className="menu-item"><Link className='Link' to="/Home1">Home</Link></div>
      <div className="menu-item">
      <div>Faculty</div>
      <div className="subitems"><div className='menu-items'><Link to="/Adf">add faculty</Link></div>
      <div className='menu-items'><Link to="/Delf">delete faculty</Link></div>
      <div className='menu-items'><Link to="/Faclog">Faculty login</Link></div>
      </div>
      </div>
      <div className="menu-item"><Link className='Link' to="/content">Content</Link></div>
      <div className="menu-item">
      <div>Student</div>
      <div className="subitems"><div className='menu-items'><Link to="/Ads">add Student</Link></div>
      <div className='menu-items'><Link to="/Dels">delete Student</Link></div>
      <div className='menu-items'><Link to="/Gets">Get Student details</Link></div>
      </div>
      
      </div>
     
  </div>
  <Routes>
    <Route path='/Home' element={<Home1/>}></Route>
    <Route path='/Adf' element={<Adf/>}></Route>
    <Route path='/Delf' element={<Delf/>}></Route>
    <Route path='/Faclog' element={<Getf/>}></Route>
    <Route path='/Ads' element={<Ads/>}></Route>
    <Route path='/Dels' element={<Dels/>}></Route>
    <Route path='/Gets' element={<Gets/>}></Route>
    <Route path='/content' element={<Content/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}
export default Menu;