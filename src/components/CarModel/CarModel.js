import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

export default function CarModel({ car }) {
  return (
    <div className="car-model">
      <Accordion>
        <AccordionSummary>
          {car.year} {car.model} {car.make} {car.askingPrice}
        </AccordionSummary>
        <AccordionDetails>
          {car.vin} {car.dealerCost} {car.lot.name} {car.lot.city} {car.lot.country}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}