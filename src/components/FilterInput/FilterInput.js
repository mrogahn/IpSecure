import './FilterInput.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function FilterInput({ filter, setFilter }) {

  return (
    <div className="filter-input">
      <TextField label="Filter" variant="standard" size="small" fullWidth value={filter} onChange={(e) => setFilter(e.target.value)}/>
      <Button variant="outlined" color="primary" style={{minWidth: '100px', marginLeft: '10px'}}>
        Filter
      </Button>
    </div>
  )
}