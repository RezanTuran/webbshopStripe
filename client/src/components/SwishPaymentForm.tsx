
import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


export default class SwishValidationForm extends React.Component {
    state = {
        formData: {
            phonenumber:''
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });

        if(this.state.formData.phonenumber.length > 10){
            alert("Telefonnumer får inte vara mer än 10 siffror..!")
        }

    }

    handleSubmit = () => {
        if(this.state.formData.phonenumber.length === 10){
            (window.location.href = './done')
        }else{
            alert("Ange rätt telefonnummer och i rätt format")
        }
    }

    render() {
        const { formData, submitted } = this.state;
        return (

            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h6>Betala med swish</h6>
                <TextValidator
                    label="Telefonnummer"
                    onChange={this.handleChange}
                    name="phonenumber"
                    value={formData.phonenumber}
                    type="number"
                    validators={['required']}
                    errorMessages={['Ange telefonnummer för kunna gå vidare med betalningen']}
                />
                <br/>
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    Betala
                </Button>
            </ValidatorForm>
        );
    }
}
