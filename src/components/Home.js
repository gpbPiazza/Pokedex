import React from 'react';
import Card from './Card';
import axios from 'axios';
// import HomeService from '../service/HomeService';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pokemns, setPokemons] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    var request = axios.get("https://pokeapi.co/api/v2/pokemon?limit=893");
		request.then(anwser => {
      console.log(anwser.data.results)
      setPokemons(anwser.data.results);
      zape();
    });
    // anwserApi();
  },[]);

  const zape = () => {
    console.log(pokemns);
  }

  // const anwserApi = async () => {
  //   // setLoading(true);
  //   const data = await HomeService.getPokemons();
  //   // setLoading(false);
  //   if (data) {
  //     console.log(data)
  //   } else {
  //    console.log('AI AI NÃO DEU')
  //   }
  // };

  return (
    <div className='home__container'>
      <ul>
        {pokemns ? 
        pokemns.map((item)=><Card name={item.name} id={item.url.split('/')[6]} />) 
        : 
        <span>
          <img src='img/pikachuDance.gif' />
          Carregando Lista de Pokemons...
        </span>}
      </ul>
    </div>
  );
}
