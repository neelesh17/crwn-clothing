import React from 'react';

import { ImageConatiner, ItemDetailContainer, CartItemContainer} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
        <ImageConatiner src={imageUrl} alt="item"/>
        <ItemDetailContainer>
            <span>{name}</span>
            <span>
                {quantity} x ${price}
            </span>

        </ItemDetailContainer>
    </CartItemContainer>
);

export default React.memo(CartItem);