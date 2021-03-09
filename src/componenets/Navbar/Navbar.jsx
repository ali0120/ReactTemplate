import React from 'react'
import { Link } from 'react-router-dom';
import {Anchor,NavbarSection,Logo,Logotext,UlList,LiList ,Container,Nav} from './styled.js'
const Navbar = ()=> {
    return (
        <React.Fragment>

            <NavbarSection >
            <Container>
            <Nav>
                <Logo >
                    <Logotext >Ultra Profile</Logotext>
                </Logo>
                
                
                <UlList className="ul-list">
                    <LiList><Link className='anchor' to="/">Home</Link></LiList>

                    <LiList><Anchor href="#">Work</Anchor></LiList>
                    <LiList><Anchor href="#">Portfolio</Anchor></LiList>
                    <LiList><Anchor href="#">Resume</Anchor></LiList>
                    <LiList><Anchor href="#">About</Anchor></LiList>
                    <LiList><Link className='anchor' to="/contact">contact</Link></LiList>
                </UlList>
             </Nav>  
            </Container>
            
        </NavbarSection>
        </React.Fragment>
    )
}

export default Navbar
