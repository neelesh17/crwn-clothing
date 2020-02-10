import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon  from '../cart-icon/cart-icon.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartDropdown from '../cart-dropdown/cart.dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { 
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionsLink 
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionsLink to="/shop">Shop</OptionsLink>
            <OptionsLink to="/shop">Contact</OptionsLink>
            {
                currentUser ?
                <OptionsLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionsLink>
                : 
                <OptionsLink to="/signin">Sign In</OptionsLink>
            }
            <CartIcon />
        </OptionsContainer>
        { hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);