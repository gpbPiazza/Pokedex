import React from 'react';
import Card from './Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home(props) {
  const {pokemns} = props;

  return (
    <div className='home__container'>
      <ul>
        {pokemns ? 
        pokemns.map((item)=><Card name={item.name} id={item.url.split('/')[6]} />) 
        : 
        <span className='loadingPokemons'>
          <img src='img/pikachuDance.gif' />
          Carregando Lista de Pokemons...
        </span>}
      </ul>
    </div>
  );
}
