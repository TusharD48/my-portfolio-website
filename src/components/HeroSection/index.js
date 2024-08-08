import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import HeroImg from '../../images/HeroImage.jpg'

const Hero = () => {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation/>
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id='left'>
            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>
                I am a
                <Span>
                    <Typewriter
                        options={{
                            strings: Bio.roles,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </Span>
              </TextLoop>
              <SubTitle>{Bio.description}</SubTitle>
              <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero