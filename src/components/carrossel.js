import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SectionContainer = styled('section')`
  margin-top: 20px;
`;

const Title = styled(Typography)`
  color: #3f51b5;
  font-size: 24px;
  margin-bottom: 20px;
`;

const ProjectContainer = styled('div')`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 20px;
  height: 100%;
`;

const ProjectTitle = styled(Typography)`
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProjectDescription = styled(Typography)`
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
`;

const Carrossel = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/forgondolin/repos');
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <SectionContainer id="projects">
      <Title variant="h3">Meus Projetos</Title>
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectContainer key={project.id}>
            <ProjectTitle variant="h6">{project.name}</ProjectTitle>
            <ProjectDescription variant="body1">{project.description}</ProjectDescription>
            <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </Link>
          </ProjectContainer>
        ))}
      </Slider>
    </SectionContainer>
  );
};

export default Carrossel;
