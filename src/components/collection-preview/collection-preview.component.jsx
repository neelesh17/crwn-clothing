import React from 'react';

import CollectionItems from '../collection-item/collection-item.component';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
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

export default CollectionPreview;