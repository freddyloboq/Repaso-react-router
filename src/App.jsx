import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./views/home";
import List from './views/list'
import Perfil from "./views/perfil";
import Details from "./views/details";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/list"> List </Link>
            <Link to="/perfil"> Perfil </Link>
        </nav>

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/list"} element={<List />} />
          <Route path={"/perfil"} element={<Perfil />} />
          <Route path={"/details/:id"} element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App