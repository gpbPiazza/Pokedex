import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../components/Card';

export default function Home() {
  const [searchPokemon, setSearchPokemon] = useState('');
  const [pokemns, setPokemons] = useState([]);
  
  useEffect(() => {
    const request = axios.get("https://pokeapi.co/api/v2/pokemon?limit=893");
		request.then(anwser => {
      setPokemons(anwser.data.results)
    });
  },[]);

  const search = (text) => {
    setSearchPokemon(text)
  }

  if (pokemns.length === 0) {
    return (<span className='loading__pokemons'>
            <img src='img/pikachuDance.gif' />
            Carregando Lista de Pokemons...
            </span>)
  }

  const filtredPokemons = pokemns.filter(pokemn => pokemn.name.toLowerCase().includes(searchPokemon.toLowerCase()))

  return (
    <div className='home__container'>
      <input placeholder='Pesquise pelo nome' onChange={e => search(e.target.value)} value={searchPokemon} />
      <ul style={{listStyle: 'none'}}>
        {filtredPokemons.map((item)=><Card name={item.name} key={item.url.split('/')[6]} id={item.url.split('/')[6]} />) }
      </ul>
    </div>
  );
}
