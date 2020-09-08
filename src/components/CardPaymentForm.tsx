
import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default class ValidationForm extends React.Component {
    state = {
        formData: {
            name:'',
            cardNumber:'',
            date:'',
            cvv:'',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });

        if(this.state.formData.cardNumber.length > 16){
          alert("Fel format..! Kortnummer får inte vara mer än 16 siffror")
        }
        if(this.state.formData.cvv.length > 3){
          alert("Fel format..! CVV får inte vara mer än 3 siffror")
        }

    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h6>Betala med kort</h6>
                <TextValidator
                    label="Namn"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['Ange ditt namn för att kunna gå viadare']}
                />
                <br/>
                <TextValidator
                    label="Kort nummer"
                    onChange={this.handleChange}
                    name="cardNumber"
                    value={formData.cardNumber}
                    type="number"
                    validators={['required']}
                    errorMessages={['Ange kortnummer för att kunna gå vidare']}
                />
                <br/>
                <TextValidator
                    label="CVV"
                    onChange={this.handleChange}
                    name="cvv"
                    value={formData.cvv}
                    type="number"
                    validators={['required']}
                    errorMessages={['Ange cvv för att kunna gå vidare']}
                />
                <br/>
                <TextValidator
                    onChange={this.handleChange}
                    name="date"
                    value={formData.date}
                    type="date"
                    validators={['required']}
                    errorMessages={['Ange kortets gillighets datum']}
                />
                <br/>
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && (window.location.href = './done'))
                        || (!submitted && 'Betala')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}