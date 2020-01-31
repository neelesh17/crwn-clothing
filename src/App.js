import React from 'react';
import { Switch ,Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShopPage from '../src/components/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homapage.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth , createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth, userAuth.displayName);
        userRef.onSnapshot(async snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/shop" component={ShopPage} />
          <Route exact={true} path="/checkout" component={CheckoutPage} />
          <Route 
            exact={true} 
            path="/signin" 
            render={() => 
              this.props.currentUser ? 
              (<Redirect to='/'/>) : 
              (<SignInAndSignUpPage/>)
            } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
