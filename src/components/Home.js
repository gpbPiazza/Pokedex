import React from 'react';
import Card from './Card';


export default function Home(props) {
  const {pokemns} = props;


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
