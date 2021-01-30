import React from 'react';
import {Link} from "react-router-dom";

export default function Card({name, id}) {    
  return (
      <>
        <Link to={`/pokemon/${id}`} >
            <li>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
                <p>{name}</p>
                <span>#{id}</span>
            </li>
        </Link>
      </>
    
  );
}
