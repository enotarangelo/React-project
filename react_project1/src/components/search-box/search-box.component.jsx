import './search-box.styles.css'

const Searchbox=(any)=>{
        return (
            <div>
               <input 
               className={`search-box ${any.className}`} 
               type={any.type}
               placeholder={any.placeholder} 
               onChange={any.onChangeHandler}/>
            </div>
        )
}

export default Searchbox;