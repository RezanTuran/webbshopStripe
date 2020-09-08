import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Box } from '@material-ui/core';

interface Props {}
interface State {
  selectedDeliveryMethod: "PostNord" | "DHL" | "Schenker"
}

export  interface Delivery{
  name: string
  price: number
  days: number
}

let Delivery: Delivery[] = [{
  name: "PostNord",
  price: 49,
  days: 3
}, {
  name: "DHL",
  price: 149,
  days: 2
}, {
  name: "Schenker",
  price: 499,
  days: 1
}
  
];

export default class PaymentForm extends React.Component{


  state: State = {
    selectedDeliveryMethod: "PostNord"
  }
  
  renderPaymentFields() {
    switch(this.state.selectedDeliveryMethod) {
      case "PostNord": return(
      <div>
        <Box border={1} p={2}>
          <Typography>{Delivery[0].name}</Typography>
          <Typography>Leverans dagar: {Delivery[0].days}</Typography>
          <Typography>Fraktkostnad: {Delivery[0].price} kr.</Typography>
          <Typography>Ankomst: {new Date(new Date().setDate(new Date().getDate() + Delivery[0].days)).toISOString().substring(0, 10)}</Typography>
        </Box>
      </div>
      )
      case "DHL": return(
      <div>
        <Box border={1} p={2}>
          <Typography>{Delivery[1].name}</Typography>
          <Typography>Leverans dagar: {Delivery[1].days}</Typography>
          <Typography>Fraktkostnad: {Delivery[1].price} kr.</Typography>
          <Typography>Ankomst: {new Date(new Date().setDate(new Date().getDate() + Delivery[1].days)).toISOString().substring(0, 10)}</Typography>
        </Box>
      </div>
      ) 
      case "Schenker": return(
      <div>
        <Box border={1} p={2} >
          <Typography>{Delivery[2].name}</Typography>
          <Typography>Leverans dagar: {Delivery[2].days}</Typography>
          <Typography>Fraktkostnad: {Delivery[2].price} kr.</Typography>
          <Typography>Ankomst: {new Date(new Date().setDate(new Date().getDate() + Delivery[2].days)).toISOString().substring(0, 10)}</Typography>
        </Box>
      </div>
      )
    }
  }


  render() {
    return (
      <React.Fragment>
        <Typography></Typography>
        <Typography variant="h6" gutterBottom>
          Fraktsätt
        </Typography>
        <FormLabel component="legend">Välj Fraktsätt</FormLabel>
        <RadioGroup aria-label="gender" name="gender1">
          <FormControlLabel value={Delivery[0].name} control={<Radio />} label="Postnord" 
          onChange={() => this.setState({ selectedDeliveryMethod: "PostNord"})}
          checked={this.state.selectedDeliveryMethod === "PostNord"}
          />
          <FormControlLabel value={Delivery[1].name} control={<Radio />} label="DHL"
           onChange={() => this.setState({ selectedDeliveryMethod: "DHL"})} />

          <FormControlLabel value={Delivery[2].name} control={<Radio />} label="Schenker" 
          onChange={() => this.setState({ selectedDeliveryMethod: "Schenker"})}/>
        </RadioGroup>
        <div>
          
        </div>
   
        <Grid container spacing={0}>
          {this.renderPaymentFields()}
        </Grid>
       
      </React.Fragment>
    );
  }

}

