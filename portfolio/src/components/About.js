import React, { Component } from 'react';

class About extends Component {
    render() {
      return (
        <div className="ribbon l-box-lrg pure-g" id="about-section">
            <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5" style={{ height: 150 }}>
                <div className="splash-head-photo"/>
            </div>
            <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

                <br/>
                <h2 className="content-head content-head-ribbon">About me</h2>

                <br/>
                <ul>
                    <li>
                        2013 - I was approved in a selection process to work for the government of southern Brazil, 
                        thus starting the career at <a href="http://www.procergs.rs.gov.br" target="_blank">PROCERGS</a>, 
                        a tech state company where I have been working to this day. My team and I develop solutions 
                        for public safety by handling sensitive information, building and maitaining systems for 
                        investigation and police approaches.
                    </li><br/>
                    <li>
                        2012 - I was hired by <a href="http://ilegra.com" target="_blank">ilegra</a> through the Young 
                        Talents Program and had my first contact with Java. I also learned in practice the concepts of 
                        Agile such as Extreme Programming. The most glaring project I participated was in a team 
                        developing an insurance simulator for retirement, whose the client was a private pension company from 
                        Rio de Janeiro - <a href="http://www.icatuweb.com.br/target/target.htm" target="_blank">Simulador ICATU Seguros</a>.
                    </li><br/>
                    <li>
                        2011 - I started working at <a href="http://www.dbccompany.com.br/" target="_blank">DBC Company</a>,
                        an IT company from Porto Alegre, Brazil. I was part of the company's BI team by performing data 
                        extractions requested by the customers, designing and maintaining OLAP Cubes.
                    </li><br/>
                    <li>
                        2010 - Being a technology lover, I began my studies by enrolling Computer Engineering 
                        at <a href="http://www.pucrs.br/en/" target="_blank">PUCRS</a>. 
                        As to my completion work, I developed a face detection and emotion recognition system in C++ embedded 
                        in a Raspberry Pi integrated with a smartphone application via Socket.
                    </li><br/>  
                </ul>


            </div>
        </div>
      )
    };
}
export default About;