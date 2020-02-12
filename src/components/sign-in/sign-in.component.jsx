import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth,SignInWithGoogle } from '../../firebase/firebase.utils';
import { SignInContainer, SignInTitle,ButtonConatiner} from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    };

    handleSubmit = async (event) => {
        const { email, password } = this.state;
        event.preventDefault();
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        } catch(error) {
            console.log(error);
        }
    };

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    };

    render(){
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label="Email" 
                        required
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="Password" 
                        required
                    />
                    <ButtonConatiner>
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </ButtonConatiner>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;