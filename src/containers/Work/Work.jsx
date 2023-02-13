import React, { useState, useEffect} from 'react'
import { AiFillGithub, AiFillEye } from 'react-icons/ai'
import { urlFor, client } from '../../client';
import { AboutSpan, AboutText } from '../About/styles';
import { AppWrap } from '../../Wrapper';

import { ActiveItem, Div1, Div2, Div3, ItemImage, NotActiveItem, ProjectLink, Tag, TextContainer, TextDesc, TextTitle, WorkContainer, WorkItemContainer, WorkItemWrapper } from './styles';

const List = ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'];



const Work = () => {
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  const [activeFilter, setActiveFilter] = useState('All')
  const [works, setWorks] = useState(null);
  const [filterWork, setFilterWork] = useState(null);

  useEffect(() => {
    const query = `*[_type == "works"]`;
    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);
      if(item === 'All'){
          setFilterWork(works)
      }else{
        setFilterWork(works?.filter((items) => items.tags.includes(item) ));
      }
    }, 500);
    
  }
  
  return (
    <>
    <AboutText id='work'> My Creative <AboutSpan>Portfolio</AboutSpan> Section </AboutText>
    <WorkContainer>
      {List.map((item, i) => (
        <>
          {activeFilter === item ? (
            <ActiveItem key={i} onClick={() => handleWorkFilter(item)}>
              {item}
            </ActiveItem>
          ):(
            <NotActiveItem key={i} onClick={() => handleWorkFilter(item)}>
              {item}
            </NotActiveItem>
          )}
        </>
      ))}
    </WorkContainer>
    <Div1
      animate={animateCard}
      transition={{duration: 0.5, delayChildren: 0.5}}
    >
      {filterWork?.map((work, i) => (
        <WorkItemContainer key={i}>
          <WorkItemWrapper>
            <ItemImage src={urlFor(work.imgUrl)} alt={work.name} />
            <Div2
              whileHover={{opacity: [0, 1]}}
              transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
            >
              <ProjectLink href={work.projectLink} target='_blank' rel='noreferrer'>
                <Div3
                  whileHover={{scale: [1, 0.9]}}
                  whileInView={{scale: [0, 1]}}
                  transition={{duration: 0.25}}
                >
                  <AiFillEye />
                </Div3>
              </ProjectLink>
              <ProjectLink href={work.codeLink} target='_blank' rel='noreferrer'>
                <Div3
                  whileHover={{scale: [1, 0.9]}}
                  whileInView={{scale: [0, 1]}}
                  transition={{duration: 0.25}}
                >
                  <AiFillGithub />
                </Div3>
              </ProjectLink>
            </Div2>
          </WorkItemWrapper>
          <TextContainer>
            <TextTitle>{work.title}</TextTitle>
            <TextDesc>{work.description}</TextDesc>
            <Tag>
              <p>{work.tags[0]}</p>
            </Tag>
          </TextContainer>
        </WorkItemContainer>
      ))}
    </Div1>
    </>
  )
}

export default AppWrap(
  Work,
  'work',
)