import Grid from "@material-ui/core/Grid";
import CarModel from "./../CarModel/CarModel";


export default function CarListContainer({ cars }) {
  return (
    <div className="car-list-container">
      <Grid container spacing={3}>
        {
          cars.filter(car => car.filtered).map((car, index) => {
            return (
              <Grid item xs={4} key={index}>
                <CarModel car={car} />
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}