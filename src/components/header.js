import React from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const HeaderContainer = styled(AppBar)`
  background-color: #0f1653;
`;

const Title = styled(Typography)`
  flex-grow: 1;
  font-size: 30px;
  color: #f7f7f7;
`;

const StyledLink = styled(Link)`
  color: #f7f7f7;
  font-weight: bold;

  &:hover {
    color: #0f1653;
  }
`;

const Header = () => {
  return (
    <HeaderContainer position="static">
      <Toolbar>
        <Title variant="h1">Meu Portfolio</Title>
        <nav>
          <ul>
            <li>
              <StyledLink href="#about">Sobre</StyledLink>
            </li>
            <li>
              <StyledLink href="#skills">Habilidades</StyledLink>
            </li>
            <li>
              <StyledLink href="#projects">Projetos</StyledLink>
            </li>
            <li>
              <StyledLink href="#contact">Contato</StyledLink>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </HeaderContainer>
  );
};

export default Header;
