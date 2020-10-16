import React from 'react';
import Card from './Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pokemns, setPokemons] = useState(null);
  
  useEffect(() => {
    const request = axios.get("https://pokeapi.co/api/v2/pokemon?limit=893");
		request.then(anwser => {
      setPokemons(anwser.data.results)
      // setTimeOut(() => {setPokemons(anwser.data.results)}, 10000);
    });
  },[]);

  return (
    <div className='home__container'>
      <ul style={{listStyle: 'none'}}>
        {pokemns ? 
        pokemns.map((item)=><Card name={item.name} id={item.url.split('/')[6]} />) 
        : 
        <span className='loading__pokemons'>
          <img src='img/pikachuDance.gif' />
          Carregando Lista de Pokemons...
        </span>}
      </ul>
    </div>
  );
}
