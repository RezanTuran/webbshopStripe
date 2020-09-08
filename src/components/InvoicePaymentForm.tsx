
import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default class ValidationForm extends React.Component {
    state = {
        formData: {
            personnummer:'',
            address:'',
            city:'',
            postCode:'',

        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });

        if(this.state.formData.personnummer.length > 12) {
          alert("Fel format..!! Personnummer får inte vara mer än 12 siffror")
        }
        if(this.state.formData.postCode.length > 5){
          alert("Fel format..!! Postnummer får inte vara mer än 5 siffror")
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
                <h6>Betala med faktura</h6>
                <TextValidator
                    label="Personnummer"
                    onChange={this.handleChange}
                    name="personnummer"
                    value={formData.personnummer}
                    type="number"
                    validators={['required']}
                    errorMessages={['Ange ditt personnummer för att kunna gå viadare']}
                />
                <br/>
                <TextValidator
                    label="Adress"
                    onChange={this.handleChange}
                    name="address"
                    value={formData.address}
                    type="text"
                    validators={['required']}
                    errorMessages={['Ange adress för att kunna gå vidare']}
                />
                <br/>
                <TextValidator
                    label="Stad"
                    onChange={this.handleChange}
                    name="city"
                    value={formData.city}
                    type="text"
                    validators={['required']}
                    errorMessages={['Ange stad för att kunna gå vidare']}
                />
                <br/>
                <TextValidator
                    label="Postnummer"
                    onChange={this.handleChange}
                    name="postCode"
                    value={formData.postCode}
                    type="number"
                    validators={['required']}
                    errorMessages={['Ange postnummer för att kunna gå vidare']}
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