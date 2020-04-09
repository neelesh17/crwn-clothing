import React, { useEffect, lazy, Suspense } from 'react';
import { Switch ,Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoudary from './components/error-boundary/error-boundary.component';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homapage.component'));
const ShopPage = lazy(() => import('../src/components/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() => import('./components/sign-in-and-sign-up/sign-in-and-sign-up.component'));

const App = ({ checkUserSession, currentUser }) =>{
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div >
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoudary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoudary>
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
