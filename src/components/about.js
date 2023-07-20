import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const SectionContainer = styled('section')`
  margin-top: 20px;
  text-align: center;
`;

const StyledImage = styled('img')`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const StyledTypography = styled(Typography)`
  color: #333;
  font-size: 18px;
`;

const About = () => {
  return (
    <SectionContainer id="about">
      <Typography variant="h3" style={{ color: '#3f51b5', marginBottom: '20px' }}>
        Kaleb Alves
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={8}>
          <StyledTypography>Email: kalebalves@tuta.io</StyledTypography>
          <StyledTypography>
            Lorem ipsum, escreva o que quiser sobre você aqui!
          </StyledTypography>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default About;
