import './App.css';
import {Component} from 'react'
import { response } from 'express';

class App extends Component {
  constructor(){
    super();
    this.state={
      utenti:[]
    }
  }
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(dati => this.setState({utenti: dati}))
    .catch(err => console.error(err));
  }
   
  render(){
    return (
      <div className="App">
        <button onClick={()=>{
          console.log('prova')
        }
        }>change name</button>
        <p>{this.state.utenti.map((utenti)=><div key={utenti.id}><h1>{utenti.name}</h1></div>)}</p>
      </div>
    );
  }
}

export default App;
