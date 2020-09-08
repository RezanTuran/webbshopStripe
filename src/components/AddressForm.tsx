import React from 'react';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import PaymentForm from './PaymentForm';
import Delivery from './Delivery';



export default class ValidationForm extends React.Component {
    state = {
        formData: {
            name: '',
            lastname: '',
            email: '',
            password: '',
            address: '',
        },
        submitted: false,
        disabled: false
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });

        if(this.state.formData.name.length > 20){
            alert("Förnamn får inte vara längre än 20 bokstäver");
        }
        if(this.state.formData.lastname.length > 20){
            alert("Efternamn får inte vara längre än 20 bokstäver");
        }
        if(this.state.formData.email.length > 20){
            alert("Epost får inte vara längre än 20 bokstäver");
        }
    
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });

        //console.log(this.state.submitted);

        if(this.state.submitted === true){
            this.handleDesableClik()
        }
    }

    handleDesableClik = () => {
        this.setState( {disabled: !this.state.disabled} )
    }

    render() {
        const { formData } = this.state;
        return (
            <React.Fragment>
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h6>Kund Information</h6>
                <TextValidator
                    label="Förnamn"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['Ange förnamn']}
                    disabled = {(this.state.disabled)}
                />
                <br />
               
                <TextValidator
                    label="Efternamn"
                    onChange={this.handleChange}
                    name="lastname"
                    value={formData.lastname}
                    validators={['required']}
                    errorMessages={['Ange efternamn']}
                    disabled = {(this.state.disabled)}
                />
                <br />
        
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['Ange email', 'epost är inte gilligt']}
                    disabled = {(this.state.disabled)}
                />
                <br />
                <TextValidator
                    label="Lösenord"
                    onChange={this.handleChange}
                    name="password"
                    value={formData.password}
                    validators={['required']}
                    type="password"
                    errorMessages={['Ange lösenord']}
                    disabled = {(this.state.disabled)}
                />
                <br />
                <TextValidator
                    label="Adress"
                    onChange={this.handleChange}
                    name="address"
                    value={formData.address}
                    validators={['required']}
                    errorMessages={['Ange adress']}
                    disabled = {(this.state.disabled)}
                />
                <br />
                <Delivery />
                <PaymentForm />
            </ValidatorForm>
            </React.Fragment>
        );
    }
}


