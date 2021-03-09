import React, { Component } from 'react';
import axios from 'axios';
import {PortfoLiolist,PortfolioSection,PortfolioTitle,Span,PortfolioItem,Box, BoxDiv ,BoxImg,OverLay,SpanOverLay} from './PortfolioStyled';

 class Portfolio extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              images:[]
         }
     }
     componentDidMount(){
         axios.get('js/data.json').then(res=> this.setState({images:res.data.portfolio}))
     }
    render() {
        const images = this.state.images;
        const imageList = images.map(img=>{
            return(
                <BoxDiv key={img.id}>
                        <BoxImg src={img.image} alt=""/>
                        <OverLay>
                            <SpanOverLay>
                                Show Image
                            </SpanOverLay>
                        </OverLay>
                </BoxDiv> 
            )
        })
        return (
            <React.Fragment>
             <PortfolioSection >
                <PortfolioTitle ><Span>My</Span> Portfolio</PortfolioTitle>
                <PortfoLiolist>
                    <PortfolioItem active='1' >All</PortfolioItem>
                    <PortfolioItem>HTML</PortfolioItem>
                    <PortfolioItem>Photoshop</PortfolioItem>
                    <PortfolioItem>Wordpress</PortfolioItem>
                    <PortfolioItem>Mobile</PortfolioItem>
                </PortfoLiolist>
                
                <Box>
                   {imageList}
                </Box>
            
            </PortfolioSection>
            </React.Fragment>
        )
    }
}

export default Portfolio
