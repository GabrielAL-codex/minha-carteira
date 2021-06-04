import React from 'react';

import SelectInput from '../../Components/SelectInput';

import { 
    Container,
    TitleContainer,
    Controllers
 } from './styles';

const ContentHeader: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <h1>TitleContainer</h1>
            </TitleContainer>
            <Controllers>
                <SelectInput />
                <SelectInput />
                <SelectInput />
            </Controllers>
        </Container>
    );

}

export default ContentHeader;