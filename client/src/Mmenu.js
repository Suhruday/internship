import './App.css';
import { useState } from 'react';
import { Link, Route, Routes, BrowserRouter, useNavigate, useLocation } from 'react-router-dom';

import MAg from './MAg';
import MJai from './MJai';
import MDelhi from './MDelhi';
import MManali from './MManali';
import MOoty from './MOoty';
import MHome from './MHome';
import MHampi from './MHampi';
import MParis from './MParis';
import MTokyo from './MTokyo';
import MSing from './MSing';
import MGoa from './MGoa';
import MContact from './MContact';
import MBora from './MBora';
import MSwaraj from './MSwaraj';


function MmenuContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      const term = searchTerm.trim().toLowerCase();

      const searchMap = {
        agra: '/MAg',
        jaipur: '/MJai',
        delhi: '/MDelhi',
        hampi: '/MHampi',
        manali: '/MManali',
        ooty: '/MOoty',
        paris: '/MParis',
        tokyo: '/MTokyo',
        singapore: '/MSing',
        goa: '/MGoa',
        bora: '/MBora',
        swaraj: '/MSwaraj',
      };

      if (searchMap[term]) {
        navigate(searchMap[term]);
      } else {
        navigate(`/Sea?query=${encodeURIComponent(searchTerm)}`);
      }
    }
  };

  return (
    <div className="men">
      <div className="men-item"><Link className='Link' to="/MHome">HOME</Link></div>

      <div className="men-item">
        <div>INDIAN TOURIST PLACES</div>
        <div className="sbitems">
          <div className='men-items'><Link to="/MAg">AGRA</Link></div>
          <div className='men-items'><Link to="/MJai">JAIPUR</Link></div>
          <div className='men-items'><Link to="/MDelhi">DELHI</Link></div>
          <div className='men-items'><Link to="/MHampi">HAMPI</Link></div>
          <div className='men-items'><Link to="/MManali">MANALI</Link></div>
          <div className='men-items'><Link to="/MOoty">OOTY</Link></div>
        </div>
      </div>

      <div className="men-item"><Link className='Link' to="/MContact">CONTACT</Link></div>

      <div className="men-item">
        <div>FOREIGN TOURIST PLACES</div>
        <div className="sbitems">
          <div className='men-items'><Link to="/MParis">PARIS</Link></div>
          <div className='men-items'><Link to="/MTokyo">TOKYO</Link></div>
          <div className='men-items'><Link to="/MSing">SINGAPORE</Link></div>
        </div>
      </div>

      <div className="men-item">
        <div>PLACES FOR HONEYMOON</div>
        <div className="sbitems">
          <div className='men-items'><Link to="/MGoa">GOA</Link></div>
          <div className='men-items'><Link to="/MBora">BORA BORA</Link></div>
          <div className='men-items'><Link to="/MSwaraj">SWARAJ DWEEP</Link></div>
        </div>
      </div>

      <div className="men-item">
        Search:
        <input
          type="text"
          placeholder="Search place..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
}

function Sear() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Results for: {searchQuery}</h2>
      {!searchQuery && <p>Please enter a search term.</p>}
    </div>
  );
}

function Mmenu() {
  return (
    <BrowserRouter>
      <MmenuContent />
      <Routes>
        <Route path='/MHome' element={<MHome />} />
        <Route path='/MAg' element={<MAg />} />
        <Route path='/MJai' element={<MJai />} />
        <Route path='/MDelhi' element={<MDelhi />} />
        <Route path='/MHampi' element={<MHampi />} />
        <Route path='/MManali' element={<MManali />} />
        <Route path='/MOoty' element={<MOoty />} />
        <Route path='/Sear' element={<Sear />} />
        <Route path='/MParis' element={<MParis/>}/>
        <Route path='/MTokyo' element={<MTokyo/>}/>
        <Route path='/MSing' element={<MSing/>}/>
        <Route path='/MGoa' element={<MGoa/>}/>
        <Route path='/MBora' element={<MBora/>}/>
        <Route path='/MSwaraj' element={<MSwaraj/>}/>
        <Route path='/MContact' element={<MContact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Mmenu;
