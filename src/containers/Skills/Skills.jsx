import React, { useState, useEffect} from 'react';
import { urlFor, client } from '../../client';
import { AppWrap } from '../../Wrapper';
import { Div1, Div2, Div3, Div4, Div5, ExperienceContainer, ExperienceParagraph, ExperienceText, ExperienceTitle, Icon, IconContainer, IconName, SkillsContainer, SkillsTitle, ToolTip } from './styles';

const Skills = () => {
const [skill, setSkill] = useState(null);
const [experience, setExperience] = useState(null);

  useEffect(() => {
    const query = `*[_type == "experiences"]`;
    const skillsQuery = `*[_type == "skills"]`;

    client.fetch(query)
      .then((data) => {
        setExperience(data);
      });
      client.fetch(skillsQuery)
      .then((data) => {
        setSkill(data);
      })
  }, [])

  return (
    <>
      <SkillsTitle id='skills'> Skills & Experience</SkillsTitle>
      <SkillsContainer>
        <Div1>
          {skill?.map((item, i) => (
            <Div2
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              key={i}
            >
              <IconContainer style={{background: item.bgColor}}>
                <Icon src={urlFor(item.icon)} alt={item.name} />
                <IconName>{item.name}</IconName>
              </IconContainer>
            </Div2>
          ))}
        </Div1>
        <ExperienceContainer>
          {experience?.map((items) => (
            <Div5 key={items.year}>
              <ExperienceText>
                <p>{items.year}</p>
              </ExperienceText>
                <Div3>
            {items.works?.map((item, i) => (
              <>
              <Div4
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5}}
                data-tip
                data-for={item.name}
                key={i}
              >
                <ExperienceTitle>{item.name}</ExperienceTitle>
                <ExperienceParagraph>{item.company}</ExperienceParagraph>
              </Div4>
              <ToolTip
                id={item.name}
                effect='solid'
                arrowColor='#fff'
              >
                {item.desc}
              </ToolTip>
              </>
            ))}
          </Div3>
            </Div5>   
          ))}
        
        </ExperienceContainer>
      </SkillsContainer>
    </>
  )
}

export default AppWrap(
     Skills,
    'skills',
    );