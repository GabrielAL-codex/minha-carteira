import React from 'react';

import logoImg from '../../assets/logo.svg';

import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink
    
} from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                 <LogImg src={logoImg} alt="Logo Minha Carteira" />
                 <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="#">
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="#">
                    Saídas
                </MenuItemLink>
                <MenuItemLink href="#">
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );

}

export default Aside;