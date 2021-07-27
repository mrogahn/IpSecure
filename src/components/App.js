import './App.css';
import Container from "@material-ui/core/Container";
import FilterInput from "./FilterInput/FilterInput";
import CarListContainer from "./CarListContainer/CarListContainer";
import { useEffect, useState } from 'react';
import { fetchCars } from "./../API";

function App() {
  const [filter, setFilter] = useState("");
  const [cars, setCars] = useState([]);

  const addFilterProperty = (cars) => {
    const carList = [];
    for( let i = 0; i < cars.length; i ++ ) {
      const current = cars[i];
      let   filtered = false;

      const checkFilter = (obj => {
        if( filtered ) return ;
        for( let key in obj ) {
          if( typeof obj[key] === 'object' ) {
            checkFilter(obj[key]);
          } else if(`${obj[key]}`.includes(filter)) {
            filtered = true;
            break;
          }
        }
      })
      checkFilter(current);
      
      carList.push({...current, filtered});
    }
    console.log(carList);
    setCars(carList);
  }

  useEffect(() => {
    fetchCars().then((res) => {
      addFilterProperty(res);
    }).catch((err) => {
      // Error Handling Doesn't need it as I use json locally
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Will Increase time rather than calculating run time
  useEffect(() => {
    addFilterProperty(cars);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <Container className="App" maxWidth="md">
      <FilterInput setFilter={setFilter} />
      <CarListContainer cars={cars} />
    </Container>
  );
}

export default App;
