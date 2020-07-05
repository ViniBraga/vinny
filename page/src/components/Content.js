import React, { Component } from 'react';
import Skills from './Skills'
import Contact from './Contact'
import About from './About'
import Footer from './Footer';
import Projects from './Projects';

class Content extends Component {
    render() {
      return (
        <div className="content-wrapper">
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
      )
    };
}
export default Content;