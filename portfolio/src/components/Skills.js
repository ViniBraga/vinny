import React, { Component } from 'react';
import { TextEffect } from './../PosedEffect';

class Skills extends Component {

    render() {
      return (
        <div className="content" id="skills-section">
            <h2 className="content-head is-center">Skills & Experience</h2>
            <div className="pure-g">
              <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 skills-list">
                <ul>
                  <TextEffect className="skill" >Java</TextEffect>
                  <TextEffect className="skill" >Spring</TextEffect>
                  <TextEffect className="skill" >NodeJs</TextEffect>
                  <TextEffect className="skill" >Kotlin</TextEffect>
                  <TextEffect className="skill" >HTML</TextEffect>
                  <TextEffect className="skill" >CSS</TextEffect>
                  <TextEffect className="skill" >Javascript</TextEffect>
                  <TextEffect className="skill" >Jquery</TextEffect>
                </ul>
                <ul>
                  <TextEffect className="skill" >Angular</TextEffect>
                  <TextEffect className="skill" >React</TextEffect>
                  <TextEffect className="skill" >Oracle</TextEffect>
                  <TextEffect className="skill" >MySQL</TextEffect>
                  <TextEffect className="skill" >Postgres</TextEffect>
                  <TextEffect className="skill" >MongoDB</TextEffect>
                  <TextEffect className="skill" >Agile</TextEffect>
                  <TextEffect className="skill" >XP</TextEffect>
                </ul>
              </div>

            </div>
        </div>
      )
    };
}
export default Skills;