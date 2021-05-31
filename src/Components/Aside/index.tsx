import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                 <LogImg src={logoImg} alt="Logo Minha Carteira" />
            </Header>
        </Container>
    );

}

export default Aside;