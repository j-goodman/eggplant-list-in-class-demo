// STYLESHEETS
import './Index.css';

// DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";

function Index() {
  const [eggplants, setEggplants] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3345/songs`).then(
        (response) => {
            setEggplants(response.data)
        }
    )
  }, [])

  return (
    <div className="Index">
        Welcome to the Index Component!
        <ul>
            {eggplants.map((eggplant) => {
                return (<li>{eggplant.name} / {eggplant.artist}</li>);
            })}
        </ul>
    </div>
  );
}

export default Index;