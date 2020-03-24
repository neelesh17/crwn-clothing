import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-items/checkout-items.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import { 
    CheckoutHeaderContainer, CheckoutPageContainer,
    HeaderBlock, Total, TestWarningContainer
} from './checkout.styles';

const  CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }
        <Total>Total: ${total}</Total>
        <TestWarningContainer>
            *Please use the following test credit card for payment*
            <br/>
            4242 4242 4242 4242 - Exp: 01/25 CVV:123
        </TestWarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);