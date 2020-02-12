import React from 'react';
import { withRouter } from 'react-router-dom';

import { Title, Subtitle, BackgroundImage, 
    ContentContainer, MenuItemContainer } from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImage className="background-image" imageUrl={imageUrl}/>
        <ContentContainer className="content">
            <Title>{title.toUpperCase()}</Title>
            <Subtitle>SHOP NOW</Subtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);