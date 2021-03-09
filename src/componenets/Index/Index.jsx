import React, { Component } from 'react'
import Home from '../Home/Home'
import Work from '../Work/Work'
import Profile from '../Portfolio/Portfolio'
import Portfolio from '../Profile/Profile'
import About from '../About/About'
import SocilaMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'
 class Index extends Component {
    render() {
        return (
            <div>
               <Home/>
               <Work />
               <Profile />
               <Portfolio />
               <About/>
               <SocilaMedia/>
               <Footer/>
            </div>
        )
    }
}

export default Index
