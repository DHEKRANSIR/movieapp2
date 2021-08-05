import React, {useState} from 'react';
import './App.css';
import Search from './Components/Search';
import  Moviedata  from './Components/Moviedata';
import Movielist from './Components/Movielist';
import AddMovie from './Components/AddMovie';
import {FcFilmReel} from 'react-icons/fc';
import SearchRate from './Components/SearchRate';

function App() {
  const [Movies, setMoviedata] = useState(Moviedata)
  const [rate, setRate] = useState(0)
  const [searching, setSearch] = useState('')
return (
    <div className="App">
      <header>
        <div className='logo'>
        <FcFilmReel style={{fontSize:'4rem'}}/>
       <h2> Movies</h2>
        </div>
        <AddMovie  Movies={Movies} setMoviedata={setMoviedata} /> 
      </header>
      <main>
        <div className='search'>
        <Search searching={searching} setSearch={setSearch}  />
        <SearchRate rate={rate} setRate={setRate}/>
        </div>
        <Movielist Movies={Movies} searching={searching} rate={rate}/>
      </main>
      
    </div>
  );
}

export default App;
