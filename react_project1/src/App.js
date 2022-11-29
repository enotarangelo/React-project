import './App.css';
import React, { useEffect, useState } from 'react';
import Searchbox from './components/search-box/search-box.component';
import Cardlist from './components/card-list/card-list.component';

const App =()=> { 
  const [searchField, setsearchField]= useState('')
  const [title, setTitle]= useState('Monster')
  const [filteredUtenti, setfilteredUtenti]= useState([])
  const [utenti, setutenti]= useState([])
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(dati => setutenti(dati))
    .catch(err => console.error(err));
  },[]);
  
  const onSearchChange=(event) => {
    const searchField= event.target.value.toLowerCase();
    setsearchField(searchField);
  }

  const onTitleChange=(event) => {
    const newTitle= event.target.value.toLowerCase();
    setTitle(newTitle);
  }
   
  useEffect(()=>{
     const newfilteredUtenti = utenti.filter((utenti)=>{
        return utenti.name.toLowerCase().includes(searchField)});
        setfilteredUtenti(newfilteredUtenti);  
  }, [utenti, searchField]);

  return (
      <div className="App">
        <h1>{title}</h1>
        <Searchbox onChangeHandler={onSearchChange} className='search-box' type='search' placeholder='search monster' />
        <br/>
        <Searchbox onChangeHandler={onTitleChange} className='search-box' type='search' placeholder='change title' />
        <Cardlist utenti={filteredUtenti}/>
      </div>
  );
  }

export default App;
