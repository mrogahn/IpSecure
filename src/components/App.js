import './App.css';
import Container from "@material-ui/core/Container";
import FilterInput from "./FilterInput/FilterInput";
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState("");
  return (
    <Container className="App" maxWidth="md">
      <FilterInput filter={filter} setFilter={setFilter} />
    </Container>
  );
}

export default App;
