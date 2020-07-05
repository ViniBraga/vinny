import React, { Component } from 'react';
import $ from 'jquery'; 


class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            generalError:'',
            nameError:'',
            emailError:'',
            subjectError:'',
            textError:'',
            messageSent:''
        };
    }
    sendMessage(event){
        event.preventDefault();
        this.clearErrors();
        const isValid = this.validate();
        if(isValid) {
            $.post( "http://ec2-54-233-174-255.sa-east-1.compute.amazonaws.com:3001/rest/sendMessage", 
            {
                name:this.name.value,
                email:this.email.value,
                subject:this.subject.value,
                text:this.text.value,
                app:'Portfolio'
            },()=>{
                this.cleanForm();
                this.setState({messageSent:'Thanks for your message. I will reply as soon as possible.'})
            }).fail(() => {
                this.setState({generalError:'Failed to send message.'});
            });
        } 
    }

    validate = () => {
        let isValid = true;
        if(!this.name.value){
            this.setState({nameError:'Please enter the name.'});
            isValid = false;
        }
        if(!this.email.value){
            this.setState({emailError:'Please enter the email.'});
            isValid = false;
        }
        if(!this.subject.value){
            this.setState({subjectError:'Please enter the subject.'});
            isValid = false;
        }
        if(!this.text.value){
            this.setState({textError:'Please enter the message.'});
            isValid = false;
        }
        return isValid;
    };

    cleanForm = () => {
        this.name.value = '';
        this.email.value = '';
        this.subject.value = '';
        this.text.value = '';
        this.clearErrors();
    }

    clearErrors = () => {
        this.setState({
            generalError:'',
            nameError:'',
            emailError:'',
            subjectError:'',
            textError:'',
        })
    }

    render(){
        return(
            <div>
                <span style={{color:'red'}}>{this.state.generalError}</span>
                <form onSubmit={this.sendMessage.bind(this)} >
                    <div>
                        <input className="imputStyle" type="text" ref={(input) => this.name = input} placeholder="Name..." disabled={this.state.messageSent} style={this.state.messageSent? {background: '#D3D3D3'} : {}}/>
                    </div>
                    <big style={{color:'red'}}>{this.state.nameError}</big>

                    <div>
                        <input className="imputStyle" type="email" ref={(input) => this.email = input} placeholder="Email..." disabled={this.state.messageSent} style={this.state.messageSent? {background: '#D3D3D3'} : {}}/>
                    </div>
                    <big style={{color:'red'}}>{this.state.emailError}</big>    

                    <div>
                        <input className="imputStyle" type="text" ref={(input) => this.subject = input} placeholder="Subject..." disabled={this.state.messageSent} style={this.state.messageSent? {background: '#D3D3D3'} : {}}/>
                    </div>
                    <big style={{color:'red'}}>{this.state.subjectError}</big> 

                    <div>
                        <textarea className="imputStyle" ref={(input) => this.text = input} placeholder="Write your message..." disabled={this.state.messageSent} style={this.state.messageSent? {background: '#D3D3D3'} : {}}/>
                    </div>
                    <big style={{color:'red'}}>{this.state.textError}</big> 
                    <big style={{color:'green'}}>{this.state.messageSent}</big> 

                    <div>
                        <button className="btn btn-6 btn-6d" type="submit" disabled={this.state.messageSent} style={this.state.messageSent? {background: '#D3D3D3',color: '#7f8c8d'} : {}}>Send</button>
                    </div>

                </form>
                
            </div>
        );
    }
}
export default ContactForm;