import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import Navbar from './componenets/Navbar/Navbar';
import Contact from './componenets/Contact/Contact';
import Index from './componenets/Index/Index';
 class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Route exact path='/' component={Index}/>
                <Route path='/contact' component={Contact} />
            </BrowserRouter>
        )
    }
}

export default App
