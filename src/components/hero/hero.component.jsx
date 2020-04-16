import React from 'react';
import { Content, Intro, Photo, SocialIcon, SocialIconContainer, HeaderColor } from './hero.style';

const Hero = () => {
  return (
    <>
      <HeaderColor>
        <Content>
          <Intro>
            <h3>Hi, my name is</h3>
            <h1>Naina Razafindrabiby.</h1>
            <h2>I build stuff for the web.</h2>
            <SocialIconContainer>
              <SocialIcon href="https://github.com/nainarazz" target="_blank" rel="noreferrer">
                <img src="/images/github-logo-square.png" alt="github" />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com/in/nainarazz" target="_blank" rel="noreferrer">
                <img src="/images/linkedin-logo.png" alt="linkedin" />
              </SocialIcon>
              <SocialIcon href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#110;&#97;&#105;&#110;&#97;&#114;&#97;&#122;&#122;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
                <img src="/images/email-logo.png" alt="email" />
              </SocialIcon>
            </SocialIconContainer>
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
