import React, {useState} from 'react';
import './App.css';
import Search from './Components/Search';
import  Moviedata  from './Components/Moviedata';
import Movielist from './Components/Movielist';
import AddMovie from './Components/AddMovie';
import {FcFilmReel} from 'react-icons/fc';
import SearchRate from './Components/SearchRate';
import { Link, Route, Switch } from 'react-router-dom';
import Trailer from './Components/Trailer'

function App() {
  const [Movies, setMoviedata] = useState(Moviedata)
  const [rate, setRate] = useState(0)
  const [searching, setSearch] = useState('')
return (
    <div className="App">
      <header>
        
        <div className='logo'>
            <FcFilmReel style={{fontSize:'4rem'}}/>
            <Link to='/'> <h2> Movies</h2></Link>
        </div>
        <AddMovie  Movies={Movies} setMoviedata={setMoviedata} /> 
      </header>
      <main>
        <div className='search'>
        <Search searching={searching} setSearch={setSearch}  />
        <SearchRate rate={rate} setRate={setRate}/>
        </div>
        <Switch>
          <Route exact path='/' render={()=><div><Movielist Movies={Movies} searching={searching} rate={rate}/></div>}/>
          <Route path='/Trailer' component={Trailer} />
          {/* <Route path='/Search' component={Search}/>
          <Route path='/SearchRate' component={SearchRate}/> */}
        </Switch>
        
      </main>
      
    </div>
  );
}

export default App;
