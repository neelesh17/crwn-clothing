import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth , createUserProfileDocument } from '../../firebase/firebase.utils';
import { SignUpContainer, SignUpTitle} from './sign-up.styles';

class SignUp extends  React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("Password Dont Match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, displayName);
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(error){
            console.log("error",error.message);
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name] : value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <SignUpContainer>
                <SignUpTitle>I do not have a Account</SignUpTitle>
                <span>Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={this.handleChange}
                    label="Display Name"
                    required
                    />
                    <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    handleChange={this.handleChange}
                    label="Email"
                    required
                    />
                    <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    handleChange={this.handleChange}
                    label="Password"
                    required
                    />
                    <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={this.handleChange}
                    label="Confirm Password"
                    required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}

export default SignUp;