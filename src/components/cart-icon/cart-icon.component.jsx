import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/carts.actions';
import {CartIconContainer, ItemCountConatiner, ShoppingIconContainer } from './cart-icon.styles.jsx';

const CartIcon = ({ toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer/>
        <ItemCountConatiner>{itemCount}</ItemCountConatiner>
    </CartIconContainer>
);


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);