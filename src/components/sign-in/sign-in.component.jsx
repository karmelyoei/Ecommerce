import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';

class SignIn extends React.Component {
  state = { email: '', password: '' };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };
  handeChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I alreay have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            label="email"
            handleChange={this.handeChange}
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton typr='button' onClick={signInWithGoogle} isGoogleSignin>
              Sign in With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
