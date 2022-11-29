import './card-list.styles.css'
import Card from "../card/card.compontent";

const Cardlist=({utenti})=> {
        return(
            utenti.map((utenti)=>{return <div className="card-list" key={utenti.id}><Card utenti={utenti}/></div>})
        )
}

export default Cardlist;