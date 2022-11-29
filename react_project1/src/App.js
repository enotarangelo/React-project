import './App.css';
import React from 'react';
import {Component} from 'react'


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
    const {utenti, searchField}= this.state;
    const {onSearchChange}= this
    const filteredUtenti = utenti.filter((utenti)=>{return utenti.name.toLowerCase().includes(searchField)})  

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monster' onChange={onSearchChange}/>
        {filteredUtenti.map((utente)=> <div key={utente.id}><h1>{utente.name}</h1></div>)}
      </div>
    );
  }
}

export default App;
