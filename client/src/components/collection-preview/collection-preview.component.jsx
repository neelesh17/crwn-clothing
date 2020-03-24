import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItems from '../collection-item/collection-item.component';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer} from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
            {
                items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItems key={item.id} item={item} />
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);