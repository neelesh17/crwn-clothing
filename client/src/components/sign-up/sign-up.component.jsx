import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ( { signUpStart } ) => {
    const [ userCredentials, setCredentials ] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName, email, password, confirmPassword } = userCredentials;
    const handleSubmit = async (event ) => {
        await event.preventDefault();
        
        if(password !== confirmPassword){
            alert("Password Dont Match");
            return;
        }

        signUpStart({displayName, email, password});
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({...userCredentials, [name] : value});
    }

    return(
        <SignUpContainer>
            <SignUpTitle>I do not have a Account</SignUpTitle>
            <span>Sign Up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                type="text"
                name="displayName"
                value={displayName}
                handleChange={handleChange}
                label="Display Name"
                required
                />
                <FormInput 
                type="email"
                name="email"
                value={email}
                handleChange={handleChange}
                label="Email"
                required
                />
                <FormInput 
                type="password"
                name="password"
                value={password}
                handleChange={handleChange}
                label="Password"
                required
                />
                <FormInput 
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                handleChange={handleChange}
                label="Confirm Password"
                required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </SignUpContainer>
    );
    
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userDetails) => dispatch(signUpStart(userDetails)),
});

export default connect(null, mapDispatchToProps)(SignUp);