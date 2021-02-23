import React, { Component } from 'react';
import Form from '../Compoents/Form';
import Main from '../Compoents/main';

class Home extends Component {
    state = {
        fullname: "",
        phoneno: "",
        mailid: "",
        dob: "",
        pass: "",
        uichange: false

    }

    onfullnamechangehandler = (event) => {
        console.log(event);
        this.setState({
            ...this.state,
            fullname: event.target.value
        })
    }
    onphonechangehandler = (event) => {
        console.log(event);
        this.setState({
            ...this.state,
            phoneno: event.target.value
        })
    }
    onmailchangehandler = (event) => {
        console.log(event);
        this.setState({
            ...this.state,
            mailid: event.target.value
        })
    }
    ondobchangehandler = (event) => {
        this.setState({
            ...this.state,
            dob: event.target.value
        })
    }
    onpasschangehandler = (event) => {
        this.setState({
            ...this.state,
            pass: event.target.value
        })
    }

    onclickhandler = () => {
        this.setState({
            ...this.state,
            uichange: true
        })
    }
    onbackhandler = () => {
        this.setState({
            ...this.state,
            uichange: false
        })
    }

    render() {
        let ui = < Form
            handlefullname={this.onfullnamechangehandler}
            handledob={this.ondobchangehandler}
            handleemail={this.onmailchangehandler}
            handlephone={this.onphonechangehandler}
            buttonhandler={this.onclickhandler}
            handlePassword={this.onpasschangehandler} />

        if (this.state.uichange) {
            ui = <Main backhandle={this.onbackhandler} fullname={this.state.fullname} dob={this.state.dob} mailid={this.state.mailid} phone={this.state.phoneno} pass={this.state.pass} />
        }
        return (
            <div>
                {ui}
            </div >
        );
    }
}

export default Home;