import React from 'react';
import {Link} from "react-router-dom";


export default function Card(props) {
    const {name, id} = props;
    
    
  return (
      <>
        <Link to={`/pokemon/${id}`}>
            <li>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
                <p>{name}</p>
                <span>#{id}</span>
            </li>
        </Link>
      </>
    
  );
}
