import React, { useState, useEffect } from "react";
import axios from "axios";
import Bicho from "./Bicho";
/*obtener datos API
        instalar axios
        importar hook useEffect y useSatate. Añadimos al final del useEffect los corchetes para que no se meta en bucle infinito
        hacer el axios.get que devuelve promesa y JSON
    */
const Pelicula = () => {
  function activateLasers(url) {
    <Bicho url={url} />;
  }
  const [bichos, setBichos] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=999&limit=999`)
      .then((res) => {
        setBichos(res.data.results);
      });
  }, []);
  return (
    <div>
      <ul>
        {bichos.map((bicho) => (
          <li>
            <Bicho url={bicho.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

//dentro del div mostrar los datos

export default Pelicula;
