import { Routes, Route } from 'react-router-dom';

import Home from './router/home/home.compontent';
import Navigation from './router/navigation/navigation.compontent';
import Authentication from './router/authentication/authentication.component';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;