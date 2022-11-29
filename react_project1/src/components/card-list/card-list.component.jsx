import { Component } from "react";
import './card-list.styles.css'
import Card from "../card/card.compontent";

class Cardlist extends Component{
    render(){
        const {utenti}=this.props
        
        return(
            utenti.map((utenti)=>{return <div className="card-list" key={utenti.id}><Card utenti={utenti}/></div>})
        )
    }
}

export default Cardlist;