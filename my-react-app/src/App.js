import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ReactDOM } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Cards from './components/CardComponent';
import data from './components/data';

function App() {
   const cardis = data.map(item => {
    return  <Cards
         key = {item.id}
         img={item.coverImg}
         rating={item.stats.rating}
         reviewCount={item.stats.reviewCount}
         location={item.location}
         title={item.title}
         price={item.price}
      />
   })

   return <>
      <div className='Mycontainer'>
         <Navbar/>
         <Hero/>
         <div className="cards-container">{cardis}</div>
      </div>
   </> 
};
export default App;