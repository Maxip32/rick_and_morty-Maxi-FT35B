import './App.css'
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav";
import About from "./components/About"
import Detail from './components/Detail';
import { useState } from 'react';
import {Routes, Route } from 'react-router-dom';

function App () {

  const [characters, setCharacters]= useState([]);
  const Cerrar=(idClose)=>{
    setCharacters(characters.filter(elem=> elem.id !== idClose))
    
    
    
      }
    
  const onSearch= (characters)=>{

    fetch(`https://rickandmortyapi.com/api/character/${characters}`)
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

      <Nav onSearch={onSearch}/>
  <Routes>

<Route   path="/home" element={<Cards onClose={Cerrar} characters={characters} />}/>
<Route   path="/about" element={<About/>}/>
<Route   path="detail/:detailId" element={<Detail/>}/>
  </Routes>
  
  </div>

  )
  

}



export default App;
