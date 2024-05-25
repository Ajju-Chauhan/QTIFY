

import { useState, useEffect } from 'react';
import './App.css';
import Header  from './Component/Header.js';
import Hero from './Component/Hero.js';
import CardSection from './Component/CardSection/CardSection.js';
import AccordionSection from './Component/AcoordionSecion/AcoordionSecion.js';
import Navbar from './Component/Navbar/Navbar.jsx';
import { getTopSongsData, getNewSongsData, getSongsData } from './utils/utils';

function App() {
  const [topSongsData, setTopSongsData] = useState([]);
  const [newSongsData, setNewSongsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  useEffect(() => {
    (async () => {
      const topSongsData = await getTopSongsData();
      setTopSongsData(topSongsData);

      const newSongsData = await getNewSongsData();
      setNewSongsData(newSongsData);

      const songsData = await getSongsData();
      setSongsData(songsData);
    })();
  }, []);


  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <CardSection name="Top Albums" songsData={topSongsData} />
        <CardSection name="New Albums" songsData={newSongsData} />
        <CardSection name="Songs" songsData={songsData} showFilters />
        <AccordionSection />
    </div>
  );
}

export default App;
