import React, { Component } from 'react'
import { HomeSection , HomeInfo,HomeBtn,HomeDesc,HomeTitle, Span ,HomeInformation,Container} from './style';
 class Home extends Component {
    render() {
        return (
            <React.Fragment>
                 <HomeSection>
                    <Container>
                        <HomeInformation>
                            <HomeTitle>Hamza Nabil</HomeTitle>
                            <HomeInfo>Creative Director</HomeInfo>
                            <HomeDesc>
                                Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                            </HomeDesc>
                            <HomeBtn>Let's Begin</HomeBtn>
                        </HomeInformation>
                    </Container>
                </HomeSection>
       
            </React.Fragment>
        )
    }
}

export default Home
