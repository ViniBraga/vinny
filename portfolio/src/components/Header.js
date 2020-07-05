import React, { Component } from 'react';
import { goToSection } from './../Transitor';
import $ from 'jquery'; 

class Header extends Component {

    componentDidMount() {
        $('.pure-menu-item').click(function() {
            goToSection(this.id, this.className);
        });
    }

    render() {
      return (
        <div className="header" id="top-section">
            <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <a className="pure-menu-heading" href="">
                <div className="home-logo"/>
                </a>
                
                <ul className="pure-menu-list">
                    <li style={{cursor: 'pointer'}} className="pure-menu-item pure-menu-selected" id="top"><a className="pure-menu-link">Home</a></li>
                    <li style={{cursor: 'pointer'}} className="pure-menu-item" id="about"><a className="pure-menu-link">About</a></li>
                    <li style={{cursor: 'pointer'}} className="pure-menu-item" id="skills"><a className="pure-menu-link">Skills</a></li>
                    <li style={{cursor: 'pointer'}} className="pure-menu-item" id="projects"><a className="pure-menu-link">Projects</a></li>
                    <li style={{cursor: 'pointer'}} className="pure-menu-item" id="contact"><a className="pure-menu-link">Contact</a></li>
                </ul>
            </div>
        </div>
      )
    };
}
export default Header;