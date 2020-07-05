import React, { Component } from 'react';
import posed from 'react-pose';


const Box = posed.div({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
      scale: 1.2,
      boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    press: {
      scale: 1.1,
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }
});


class Project extends Component {

    render() {
        return (
            <Box className="box" >
                <div style={{width:'100%', height:'50%'}}>
                    <div className="project-container-img">
                       <img src={this.props.projeto.imagem}/>
                    </div>
                </div>
                <div style={{width:'100%', height:'50%'}}>
                    <div className="project-container-description">
                       <p>{this.props.projeto.titulo}</p>
                        <ul>
                            {this.props.projeto.links.map(l => {
                                return <li><a className="linkProjetct" href={l.value} target="_blank">{l.key}</a></li>
                            })}
                        </ul>
                    </div>
                </div>
            </Box>
        )
    }
}
export default Project;