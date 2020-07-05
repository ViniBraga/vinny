import React, { Component } from 'react';
import { goToSection } from './../Transitor';
import TypeWriter from 'react-typewriter';
import $ from 'jquery'; 


class Home extends Component {

    componentDidMount() {
        $('.hereLink').click(function() {
            goToSection("contact", "pure-menu-link");
        });
    }

    render() {
        return (
        <div key="1" className="splash-container" id="home-section">
            <div key='3' className="splash">
                
                <h1 className="splash-head">Vinicius Braga</h1>
                <TypeWriter typing={3}>
                <ul className="splash-subhead">
                    Hi! I'm a Full Stack Developer from Brazil. If you are seeking an IT professional experienced in 
                    current technologies, please get in touch <a style={{cursor: 'pointer'}} className="hereLink">here</a>.
                </ul>
                </TypeWriter>

                <p className="splash-subhead">
                   
                </p>
           
                <p>
                    <a href="https://www.linkedin.com/in/viniciusbraga99" target="_blank" className="splash-icon splash-icon-linkedin"/>
                    <a href="https://github.com/ViniBraga" target="_blank" className="splash-icon splash-icon-github"/>
                    <a href="https://www.facebook.com/vinicius.braga.9693" target="_blank" className="splash-icon splash-icon-facebook"/>
                    <a href="https://www.instagram.com/vinibraga99" target="_blank" className="splash-icon splash-icon-instagram"/>
                </p>
            </div>
        </div>
        )
    };
}
export default Home;