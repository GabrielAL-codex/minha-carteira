import React from 'react';

import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';

import { Container } from './styles';

const List: React.FC = () => {
    const options = [
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Maria', label: 'Maria'},
        {value: 'Ana', label: 'Ana'},
    ];

    return (
        <Container>
            <ContentHeader title="Saídas" linecolor="#E44C4E">
                <SelectInput options={ options } />
            </ContentHeader>
        </Container>
    );

}

export default List;