import {React,useState,useEffect} from 'react'
import axios from "axios";
const Bicho = (props) => {
    const [caracteristicas, setCaracteristicas] = useState([]);
    useEffect( ()=>{
        axios.get(`${props.url}`)
        .then((res)=>{
            setCaracteristicas(res.data)
            }
        )
      },[]
      )
      return ( 
        <div>
          <p>  {caracteristicas.id} </p>
          <p> {caracteristicas.name}</p>
          <img src={caracteristicas.sprites.front_default} alt="bicho en cuestión" />

         
       
        </div>

          )
}

export default Bicho