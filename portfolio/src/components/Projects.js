import React, { Component } from 'react';
import Project from './Project'


class Projects extends Component {

    constructor() {
        super();
        this.state = {
            projetos : [
                {
                    imagem : require('../img/invest_simulator.png'),
                    titulo : 'Invest Simulator',
                    links: [
                        {key:'Repository', value:'https://github.com/ViniBraga/invest-simulator-ui'},
                        {key:'Application', value:'https://invest-simulator-ui.herokuapp.com/'},
                    ]
                },
                {
                    imagem : require('../img/trade_analysis.png'),
                    titulo : 'Stock Market Analysis',
                    links: [
                        {key:'Repository', value:'https://github.com/ViniBraga/stock-market-analysis'},
                        {key:'Application', value:'https://stock-market-analysis-vb.herokuapp.com'},
                    ]
                },
            ],
        }
    }

    render() {
        return (
        <div className="content" id="projects-section">
            <h2 className="content-head is-center">Side Projects</h2>
            <div className="pure-g">
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 skills-list">
                        <p>
                        Some personal projects containing solutions in several technologies can be 
                        found on my <a className="linkProjetct" href="https://github.com/ViniBraga" target="_blank">github</a>.
                        </p>
                    
                        <p>
                        These projects are for consultation purposes only, since they are with the source available in 
                        order to show solutions to common problems usually found in software development. They are also 
                        in constant development and having continuous improvements.
                        </p>

                        <p>
                        Among them are:
                        </p>

                    <div>
                        <Project projeto={this.state.projetos[0]}/>
                        <Project projeto={this.state.projetos[1]}/>
                    </div>
                            
                </div>
            </div>
        </div>
        )
    };


}
export default Projects;