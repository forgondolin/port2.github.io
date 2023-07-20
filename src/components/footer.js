import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const FooterContainer = styled('footer')`
  text-align: center;
  margin-top: 20px;
`;

const FooterText = styled(Typography)`
  color: #333;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText variant="body2">&copy; {new Date().getFullYear()} Kaleb Alves</FooterText>
    </FooterContainer>
  );
};

export default Footer;
