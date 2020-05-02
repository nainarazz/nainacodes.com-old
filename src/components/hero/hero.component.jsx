import React from 'react';
import { Content, Intro, Photo, TagsContainer, HeaderColor } from './hero.style';
import theme from '../../config/theme';

const { techColor } = theme;

const Hero = () => {
  return (
    <>
      <HeaderColor>
        <Content>
          <Intro>
            <h3>Hi, my name is</h3>
            <h1>Naina Razafindrabiby.</h1>
            <h2>I build stuff for the web.</h2>
            <TagsContainer>
              <span style={{ backgroundColor: techColor.javascript }}>#JavaScript</span>
              <span style={{ backgroundColor: techColor.react }}>#React</span>
              <span style={{ backgroundColor: techColor.angular }}>#Angular</span>
            </TagsContainer>
          </Intro>
          <Photo
            src="/images/profile-pic.jpg"
            srcSet="/images/profile-pic_w331.jpg 331w, /images/profile-pic_w519.jpg 519w, /images/profile-pic_w740.jpg 740w"
            alt="profile photo"
          />
        </Content>
      </HeaderColor>
    </>
  );
};

export default Hero;
