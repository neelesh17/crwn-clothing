import React, { useEffect } from 'react';
import { Switch ,Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShopPage from '../src/components/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homapage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { GlobalStyle } from './global.styles';

const App = ({ checkUserSession, currentUser }) =>{
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div >
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route 
          exact={true} 
          path="/signin" 
          render={() => 
            currentUser ? 
            (<Redirect to='/'/>) : 
            (<SignInAndSignUpPage/>)
          } 
        />
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const  mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
