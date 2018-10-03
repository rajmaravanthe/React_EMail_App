import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import Login from '../login';
import * as actionBuilder from "../actions/index";
import Home from './homecomponent';
import * as services from '../services/index';


class HomeComponent extends Component {

    state = {
        width: 3,
        loggedIn: false,
        mails: [],
        read:0,
        inbox: true
    }

    toggle = () => {
        this.setState({
            width: this.state.width == 3 ? 18 : 3
        })
    }
    
    componentDidMount () {
        this.setState({
            read: services.unreadCount()
        })
    }

    componentWillReceiveProps(newState) {
        if (this.props.loggedIn !== newState.loggedIn) {

            this.setState({
                loggedIn: newState.loggedIn
            })

            if(!newState.loggedIn) {
                this.props.history.push('/');
            }
        }

        if(this.props.read != newState.read) {
            this.setState({
                read: services.unreadCount()
            })
        }

        if(this.props.inbox != newState.inbox) {
            this.setState({
                inbox: newState.inbox
            })
        }
    }

    render() {
        let content = null;
        if (this.props.loggedIn) {
            content = <Home inbox={this.state.inbox} read={this.state.read} width={this.state.width} toggle={this.toggle} clicked={this.props.onLogOut}/>

        } else {
            content = <Login />
        }

        return (
            <Router>
                {content}
            </Router>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        loggedIn: state.loginData.loggedIn,
        sessionData: state.loginData.sessionData,
        read: state.mailData.read,
        inbox: state.mailData.inbox
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => dispatch(actionBuilder.logOut())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));