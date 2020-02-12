import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionOverviewCollection } from './collection-overview.styles';

const CollectionOverview = ({ collections }) => (
    <CollectionOverviewCollection>
         {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionOverviewCollection>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);