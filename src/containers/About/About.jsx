import React from 'react'
import { AboutContainer, AboutImage, AboutParagraph, AboutSpan, AboutText, AboutTitle, Div1 } from './styles'
import { useState } from 'react';
import { useEffect } from 'react';
import { client, urlFor } from '../../client';
import { AppWrap } from '../../Wrapper';


const About = () => {
  const [abouts, setAbouts] = useState(null);

  useEffect(() => {
    const query = `*[_type == "abouts"]`;

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  //Design is the Key to Unlocking Business Success
  return (
    <>
      <AboutText id="about">
        {" "}
        I know that <AboutSpan>Design</AboutSpan> <hr />
        Unlocks <AboutSpan>Business Success</AboutSpan>{" "}
      </AboutText>
      <AboutContainer>
        {abouts?.map((about, i) => (
          <Div1
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            key={about.title + i}
          >
            <AboutImage src={urlFor(about.imgUrl)} alt={about.title} />
            <AboutTitle>{about.title}</AboutTitle>
            <AboutParagraph>{about.description}</AboutParagraph>
          </Div1>
        ))}
      </AboutContainer>
    </>
  );
}

export default AppWrap(
   About,
  'about',
)