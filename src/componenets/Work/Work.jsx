import React, { Component } from 'react'
import axios from 'axios'
import {WorkSection,Container,WorkTitle,Part,Icon,PartTitle,PartDesc,Span,Line} from './StyledWork'

 class Work extends Component{
     constructor(props) {
         super(props)
     
         this.state = {
              works:[]
         }
     }
     componentDidMount (){
         axios.get('js/data.json').then(res=> {this.setState({works: res.data.works})})
     }
    render() {
    
         const works = this.state.works;
         const worksList = works.map(item=>{
             return(
               <Part first={item.id} key={item.id}>
                    <Icon className={item.icon_name}></Icon>
                    <PartTitle>{item.title}</PartTitle>
                    <Line/>
                    <PartDesc>
                        {item.body}
                    </PartDesc>
                </Part>
             )
         })
        return (
            <WorkSection>
            <Container>
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                  {worksList}
            </Container>
        </WorkSection>
        )
    }
}

export default Work

