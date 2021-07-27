import './FilterInput.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

export default function FilterInput({ setFilter }) {
  const [text, setText] = useState("");
  return (
    <div className="filter-input">
      <TextField label="Filter" variant="standard" size="small" fullWidth value={text} onChange={(e) => setText(e.target.value)}/>
      <Button variant="outlined" color="primary" style={{minWidth: '100px', marginLeft: '10px'}} onClick={() => setFilter(text)}>
        Filter
      </Button>
    </div>
  )
}