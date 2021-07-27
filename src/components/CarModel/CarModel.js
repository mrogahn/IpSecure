import './CarModel.css'
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Grid from '@material-ui/core/Grid';

export default function CarModel({ car }) {
  return (
    <div className="car-model">
      <Accordion style={{backgroundColor: '#1d1d1d'}}>
        <AccordionSummary>
          <div className="summary">
            <h4 style={{color: 'white'}}>{car.make}</h4>
            <Grid container space={3}>
              <Grid item xs={3}>
                <div className="title">Year</div>
              </Grid>
              <Grid item xs={9}>
                <div className="text">{car.year}</div>
              </Grid>
            </Grid>

            <Grid container space={3}>
              <Grid item xs={3}>
                <div className="title">Model</div>
              </Grid>
              <Grid item xs={9}>
                <div className="text">{car.model}</div>
              </Grid>
            </Grid>

            <Grid container space={3}>
              <Grid item xs={3}>
                <div className="title">Price</div>
              </Grid>
              <Grid item xs={9}>
                <div className="text">{car.askingPrice}</div>
              </Grid>
            </Grid>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="details">
            <Grid container space={1}>
              <Grid item xs={4}>
                <div className="title">Vin</div>
              </Grid>
              <Grid item xs={8}>
                <div className="text">{car.vin}</div>
              </Grid>
            </Grid>
            <Grid container space={1}>
              <Grid item xs={4}>
                <div className="title">Dealer Cost</div>
              </Grid>
              <Grid item xs={8}>
                <div className="text">{car.dealerCost}</div>
              </Grid>
            </Grid>
            <Grid container space={1}>
              <Grid item xs={4}>
                <div className="title">Lot Name</div>
              </Grid>
              <Grid item xs={8}>
                <div className="text">{car.lot.name}</div>
              </Grid>
            </Grid>
            <Grid container space={1}>
              <Grid item xs={4}>
                <div className="title">Lot City</div>
              </Grid>
              <Grid item xs={8}>
                <div className="text">{car.lot.city}</div>
              </Grid>
            </Grid>
            <Grid container space={1}>
              <Grid item xs={4}>
                <div className="title">Lot Country</div>
              </Grid>
              <Grid item xs={8}>
                <div className="text">{car.lot.country}</div>
              </Grid>
            </Grid>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}