import React, { useState,useEffect } from 'react'
import axios from "axios";

/*obtener datos API
        instalar axios
        importar hook useEffect y useSatate. Añadimos al final del useEffect los corchetes para que no se meta en bucle infinito
        hacer el axios.get que devuelve promesa y JSON
    */
const Pelicula = () => {
    const [bichos, setBichos] = useState([]);
  useEffect( ()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=999&limit=999`)
    .then((res)=>{
        setBichos(res.data.results)
        }
    )
  },[]
  )
    return ( 
        <div>
        <ul>
          {
          bichos.map((bicho)=>
           <li><a href={bicho.url}>{bicho.name} </a> </li>
            
          )} 
         
        </ul>
        </div>

          )
      }
        
        //dentro del div mostrar los datos

export default Pelicula