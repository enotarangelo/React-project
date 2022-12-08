import Home from "./components/router/home/home.compontent";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/router/navigation/navigation.compontent";
import SignIn from "./components/router/sign-in/sign-in.component";

const Shop= () => {
  return ( 
    <div>
      <h1>Prova</h1>
    </div>
  )
};


const App = () => {
 return (
  <Routes>
   <Route path="/" element={ <Navigation />} >
    <Route index element={ <Home />} />
    <Route path="shop" element={ <Shop />} />
    <Route path="sign-in" element={ <SignIn />} />
   </Route>
  </Routes>

 )
};

export default App;