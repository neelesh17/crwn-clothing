import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon  from '../cart-icon/cart-icon.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartDropdown from '../cart-dropdown/cart.dropdown.component';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { 
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionsLink 
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionsLink to="/shop">Shop</OptionsLink>
            <OptionsLink to="/shop">Contact</OptionsLink>
            {
                currentUser ?
                <OptionsLink as='div' onClick={signOutStart}>Sign Out</OptionsLink>
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);