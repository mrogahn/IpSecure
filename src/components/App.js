import './App.css';
import Container from "@material-ui/core/Container";
import FilterInput from "./FilterInput/FilterInput";
import { useEffect, useState } from 'react';
import { fetchCars } from "./../API";

function App() {
  const [filter, setFilter] = useState("");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars().then((res) => {
      setCars(res);
    }).catch((err) => {
      // Error Handling Doesn't need it as I use json locally
    })
  }, [])

  useEffect(() => {
    for( let i = 0; i < cars.length; i ++ ) {
      const current = cars[i];
      const keys = Object.keys(current);
      let   filtered = false;
      for( let j = 0; j < keys.length; j ++ ) {
        if( current[keys[j]].includes(filter) ) {
          filtered = true;
          break;
        }
      }
      current.filtered = filtered;
    }
  }, [filter, cars]);
  
  return (
    <Container className="App" maxWidth="md">
      <FilterInput filter={filter} setFilter={setFilter} />
    </Container>
  );
}

export default App;
