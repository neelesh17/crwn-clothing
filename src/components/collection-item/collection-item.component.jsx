import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/carts.actions';

import { Button, Image, CollectionFooterContainer, 
    CollectionItemContainer, NameContainer, PriceContainer} from './collection-items.styles';

const CollectionItems = (({item, addItem}) => {
    const { name, price, imageUrl } = item;
    return (
    <CollectionItemContainer>
        <Image imageUrl={imageUrl} className="image"/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>${price}</PriceContainer>
        </CollectionFooterContainer>
        <Button onClick={() => addItem(item)} inverted>Add to cart</Button>
    </CollectionItemContainer>
    )
});
        

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItems);