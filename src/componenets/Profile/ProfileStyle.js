
import styled  from 'styled-components';
export const Box = styled.div``;

export const ProfileSection = styled.div`
    padding: 50px 0;
    overflow: hidden;
`
export const Container =styled.div`
    width: 85%;
    margin: auto;
`
export const ProfileContainer =styled.div`
    width: 50%;
    float: left;
`
export const ProfileTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`
export const Span = styled.span`
    font-weight: normal;
`
export const ProfileList = styled.ul`
list-style: none

`
export const ProfileItem = styled.li`
    margin-bottom: 8px;
`
export const ProfileSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
    font-weight: ${props=>props.web==="1"?'normal':''};
    color: ${props=>props.web==="1"? '#eb5424':''};
`
export const ProfileSkill = styled.div`
    width: 50%;
    float: left;
`
export const SkillDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`
export const SkillBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`
export const SPanTitle = styled.span`
    float: left;
`
export const SPanPerc = styled.span`
    float: right;
    margin-right: 100px
`
export const Parent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`
export const ParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props=>props.width==='1'?'100%':''};
    width: ${props=>props.width==='2'?'90%':''};
    width: ${props=>props.width==='3'?'80%':''};
`
