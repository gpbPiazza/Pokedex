import React from 'react';
import { useState } from 'react';

export default function Card(props) {
    const {name, id} = props;
    
    
  return (
      <li>
          {console.log()}
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
          <p>{name}</p>
          <span>#{id}</span>
      </li>
    
  );
}
