import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/carts.actions';
import {
    DetailContainer, QuantityContainer,
    RemoveButton, CheckoutItemContainer, 
    ImageContainer,
    } from './checkout-items.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt="Item"/>
        </ImageContainer>
        <DetailContainer>{name}</DetailContainer>
        <QuantityContainer>
            <div onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span >{quantity}</span>
            <div onClick={() => addItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <DetailContainer>{price}</DetailContainer>
        <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
)};

const mapDispatchToProp = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProp)(CheckoutItem);