import React, { Component } from 'react'
import Footer from '../Footer/Footer.jsx'
import {CsontainerSection,Container,InputText,InputEmail,TextArea,Form,FormInput,InputSub,Title,Span} from './StyledContact.js'
 class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <CsontainerSection>
                <Container>
                    <Title><Span>Drop </Span>Me A line</Title>
                    <Form action="">
                        <FormInput>
                            <InputText type="text" placeholder="Your Name"/>
                            <InputEmail type="email" placeholder="Your Email"/>
                        </FormInput>
                        <InputText sub type="text" placeholder="Your Subject"/>
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <InputSub type="submit" value="Send Message"/>
                    </Form>
                </Container>
            </CsontainerSection>
            <Footer />
        </React.Fragment>
        )
    }
}

export default Contact
