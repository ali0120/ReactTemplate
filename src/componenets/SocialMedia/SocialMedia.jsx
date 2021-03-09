import React, { Component } from 'react'
import axios from 'axios';
import { SocialSection,Social,Span,Icon,Head,Info } from './StyledSocial.js';
 class SocilaMedia extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             social:[]
        }
    }
       componentDidMount (){
           axios.get('js/data.json').then(res=>this.setState({social:res.data.social}));
       }
    render() {
        const {social} = this.state;
        const icons = social.map(item=>{
            return(
                <Social key={item.id} item={item.id}>
                    <Icon className= {item.icon}></Icon>
                    <Head>
                        <Span>{item.title}</Span>
                        <Info>{item.body}</Info>
                    </Head>
               </Social>
            )
        })
        return (
            <SocialSection>
                {icons}  
           </SocialSection>
        )
    }
}

export default SocilaMedia
