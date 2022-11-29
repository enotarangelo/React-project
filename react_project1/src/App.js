import './App.css';
import React from 'react';
import {Component} from 'react'
import Searchbox from './components/search-box/search-box.component';
import Cardlist from './components/card-list/card-list.component';

class App extends Component {
  constructor(){
    super();
    this.state={
      searchField:"",
      utenti:[],
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(dati => this.setState({utenti: dati}))
    .catch(err => console.error(err));
  }
  
  onSearchChange=(event) => {
    const searchField= event.target.value.toLowerCase();
    this.setState(()=>{ return{searchField}});
  }

  render(){
    console.log('render')
    const {utenti, searchField}= this.state;
    const {onSearchChange}= this
    const filteredUtenti = utenti.filter((utenti)=>{return utenti.name.toLowerCase().includes(searchField)})  

    return (
      <div className="App">
        <h1>Monster</h1>
        <Searchbox onChangeHandler={onSearchChange} className='search-box' type='search' placeholder='search monster' />
        <Cardlist utenti={filteredUtenti}/>
      </div>
    );
  }
}

export default App;
