import './App.css'
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav";
import About from "./components/About";
import Detail from './components/Detail';
import { useState } from 'react';
//import { useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from "./components/Form.jsx";
import Favorites from './components/Favorites/Favorites';

function App () {

  const location= useLocation();
  const navigate= useNavigate();
  const [characters, setCharacters]= useState([]);
  const [access, setAccess]= useState(false);
  
  const username= "maxi@hotmail.com";
  const password= "123abc";

  const login= (userData)=>{
    if(userData.username === username && userData.password === password){
    setAccess(true);
    navigate("/home");
    }
  }

//   useEffect=(()=>{
// !access && navigate("/home");

//    },[access]);


  const Cerrar=(idClose)=>{
    setCharacters(characters.filter(elem=> elem.id !== idClose))
    
    
    
      }
    
  const onSearch= async (characters)=>{
//console.log(characters, "esto es lo q buscamos")
    await fetch(`http://localhost:3001/rickandmorty/onsearch/${characters}`)
    
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No tengo personajes con ese Id no Jodas');
         }
      })
   
  }
  return (
    <div  className='App' style={{ padding: '25px' }}>


      {location.pathname === "/" ? <Form login={login}/> : <Nav  onSearch={onSearch}/> }
      
  <Routes>
    

<Route   path="/home" element={<Cards onClose={Cerrar} characters={characters} />}/>
<Route   path="/about" element={<About/>}/>
<Route   path="detail/:detailId" element={<Detail/>}/>
<Route   path="/favorites" element={<Favorites/>}/>
  </Routes>
  
  </div>

  )
  

}



export default App;
