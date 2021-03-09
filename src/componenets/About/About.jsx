import React from 'react'
import {AboutSection,Container,Title,Span,Dir,Desc,Anchor,Info}from './AboutStyle';
const About = ()=> {
    return (
        <React.Fragment>
            <AboutSection >
                <Container>
                    <Info>
                        <Title><Span>This is</Span> Me</Title>
                        <Dir>Creative Director</Dir>
                        <Desc>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                        </Desc>
                        <Desc>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                        </Desc>
                    </Info>
                </Container>
           </AboutSection>
        </React.Fragment>
    )
}

export default About
