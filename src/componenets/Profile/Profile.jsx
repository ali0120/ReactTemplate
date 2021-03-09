import React, { Component } from 'react'
import axios from 'axios';
import { ProfileSection,Container,ProfileContainer,ProfileTitle,Span,ProfileList,ProfileItem,ProfileSpan,ProfileSkill,SkillBar,SkillDesc,SPanTitle,SPanPerc,Parent,ParentSpan } from './ProfileStyle.js';
 class Profile extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            skill:[]
       }
     }
     componentDidMount (){
        axios.get('js/data.json').then(res=> {this.setState({skill: res.data.skillItems})})
    }
    render() {
        const skill = this.state.skill;
        const SkillItem = skill.map(item=>{
            return(
                <SkillBar key={item.id}>
                    <SPanTitle>{item.title}</SPanTitle>
                    <SPanPerc>{item.precent}</SPanPerc>
                    <Parent>
                        <ParentSpan width={item.width}></ParentSpan>
                    </Parent>
                </SkillBar>
            )
        })
        return (
            <React.Fragment>
            <ProfileSection>
                <Container>
                    <ProfileContainer>
                        <ProfileTitle><Span>My </Span>Profile</ProfileTitle>
                        <ProfileList>
                            <ProfileItem>
                                <ProfileSpan>Name</ProfileSpan>
                                Ali Abdelrahman
                            </ProfileItem>
                            <ProfileItem>
                                <ProfileSpan>Birthday</ProfileSpan>
                                1/2/1996
                            </ProfileItem>
                            <ProfileItem>
                                <ProfileSpan>Address</ProfileSpan>
                                Ain shams
                            </ProfileItem>
                            <ProfileItem>
                                <ProfileSpan>Phone</ProfileSpan>
                                4444 5555 6666
                            </ProfileItem>
                            <ProfileItem>
                                <ProfileSpan>Email</ProfileSpan>
                                hamza@hamza.com
                            </ProfileItem>
                            <ProfileItem>
                                <ProfileSpan>Website</ProfileSpan>
                                <ProfileSpan web="1">www.google.com</ProfileSpan>
                            </ProfileItem>
                        </ProfileList>
                    </ProfileContainer>
                    
                    <ProfileSkill>
                        <ProfileTitle>Some <Span>skills</Span></ProfileTitle>
                        <SkillDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                        </SkillDesc>
                     {SkillItem}
                       
                    </ProfileSkill>
                   
                
                </Container>
            </ProfileSection>
            </React.Fragment>
        )
    }
}

export default Profile
