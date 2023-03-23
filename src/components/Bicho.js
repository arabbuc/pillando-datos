import {React,useState,useEffect} from 'react'
import axios from "axios";
const Bicho = (props) => {
    const [caracteristicas, setCaracteristicas] = useState([]);
    useEffect( ()=>{
        axios.get(`${props.url}`)
        .then((res)=>{
            setCaracteristicas(res.data)
            console.log(res.data)
            }
        )
      },[]
      )
      return ( 
        <div>
          <p>  {caracteristicas.id} </p>
          <p> {caracteristicas.name}</p>

         
       
        </div>

          )
}

export default Bicho