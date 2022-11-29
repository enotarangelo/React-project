import { Component } from "react";
import './search-box.styles.css'

class Searchbox extends Component{
    render(){
        return (
            <div>
               <input 
               className={`search-box ${this.props.className}`} 
               type={this.props.type}
               placeholder={this.props.placeholder} 
               onChange={this.props.onChangeHandler}/>
            </div>
        )
    }
}

export default Searchbox;