import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

const SectionContainer = styled('section')`
  margin-top: 20px;
`;

const Title = styled(Typography)`
  color: #3f51b5;
  font-size: 24px;
  margin-bottom: 10px;
`;

const SkillBarContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SkillName = styled(Typography)`
  flex: 1;
  color: #333;
  font-size: 18px;
`;

const ProgressBarContainer = styled('div')`
  flex: 3;
  margin-left: 10px;
`;

const ProgressLabel = styled(Typography)`
  color: #666;
  font-size: 12px;
  margin-bottom: 5px;
`;

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 8 },
    { name: 'CSS', level: 7 },
    { name: 'JS', level: 6 },
    { name: 'React', level: 5 },
    { name: 'Docker', level: 4 },
    { name: 'CI/CD', level: 3 },
  ];

  return (
    <SectionContainer id="skills">
      <Title variant="h2">Habilidades</Title>
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </SectionContainer>
  );
};

const SkillBar = ({ name, level }) => {
  return (
    <SkillBarContainer>
      <SkillName variant="h4">{name}</SkillName>
      <ProgressBarContainer>
        <ProgressLabel>{level}</ProgressLabel>
        <LinearProgress
          variant="determinate"
          value={level * 10}
          style={{
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            height: '8px',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#3f51b5',
              borderRadius: '4px',
            },
          }}
        />
      </ProgressBarContainer>
    </SkillBarContainer>
  );
};

export default Skills;
