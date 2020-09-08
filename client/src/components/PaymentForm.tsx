import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import SwishPaymentForm from './SwishPaymentForm';
import InvoicePaymentForm from './InvoicePaymentForm';
import CardPaymentForm from './CardPaymentForm';

interface Props {}
interface State {
  selectedPaymentMethod: "faktura" | "betalkort" | "swish"
}


export default class PaymentForm extends React.Component<Props, State> {
  
  state: State = {
    selectedPaymentMethod: "swish"
  }

  renderPaymentFields() {
    switch(this.state.selectedPaymentMethod) {
      case "betalkort": return <CardPaymentForm />
      case "swish": return  <SwishPaymentForm />
      case "faktura": return  <InvoicePaymentForm />
    }
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Betalsätt
        </Typography>
        
        
        <FormLabel component="legend">Välj betalsätt</FormLabel>
        <RadioGroup aria-label="gender" name="gender1">
          <FormControlLabel value="swish" control={<Radio />} label="Swish"
          onChange={() => this.setState({ selectedPaymentMethod: "swish"})} 
          checked={this.state.selectedPaymentMethod === "swish"}
          />
          <FormControlLabel value="betalkort" control={<Radio />} label="Betalkort" onChange={() => this.setState({ selectedPaymentMethod: "betalkort"})}/>
          <FormControlLabel value="faktura" control={<Radio />} label="Faktura" onChange={() => this.setState({ selectedPaymentMethod: "faktura"})}/>
        </RadioGroup>
   
        <Grid container spacing={3}>
          {this.renderPaymentFields()}
        </Grid>
      </React.Fragment>
    );
  }

}

