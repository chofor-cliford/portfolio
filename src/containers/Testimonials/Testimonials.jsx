import React, {useState, useEffect} from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { AppWrap } from '../../Wrapper';
import { client, urlFor } from '../../client';
import { BrandImg, BrandsContainer, Div1, TestBtnContainer, TestBtnWrapper, TestContainer, TestContainers, TestContent, TestContents, TestImg, TestName, TestsName } from './styles';

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = `*[_type == "brands"]`;
    const testimonialsQuery = `*[_type == "testimonials"]`;

    client.fetch(query)
      .then((data) => {
        setBrands(data);
      });
      client.fetch(testimonialsQuery)
      .then((data) => {
        setTestimonials(data);
      })
  }, [])

  const test = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <TestContainers id='testimonials'>
      {testimonials.length && (
        <>
          <TestContainer>
            <TestImg src={urlFor(test.imgurl)} alt='testimonial' />
           <TestContents>
            <TestContent>
              <p>{test.feedback}</p>
            </TestContent>
            <TestName>{test.name}</TestName>
            <TestsName>{test.company}</TestsName>
           </TestContents>
          </TestContainer>
          <TestBtnContainer>
            <TestBtnWrapper onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : testimonials.length - 1)}>
              <HiChevronDoubleLeft />
            </TestBtnWrapper>
            <TestBtnWrapper onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : testimonials.length - 1)}>
              <HiChevronDoubleRight />
            </TestBtnWrapper>
          </TestBtnContainer>
        </>
      )}
      <BrandsContainer>
        {brands?.map((item) => (
          <Div1
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.5, type: 'tween'}}
            key={item._id}
          >
            <BrandImg src={urlFor(item.imgUrl)} alt={item.name} />
          </Div1>
        ))}
      </BrandsContainer>
    </TestContainers>
  )
}

export default AppWrap( Testimonials, 'testimonials')