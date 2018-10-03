import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


import SentComponent from './sentComponent';
import SentReader from './sentMailComponent';
import Aux from '../hoc/aux';
import * as services from '../services/index';

class Sent extends Component {

    state = {
        mailReader: false,
        data: {},
        mails: []
    }

    componentDidMount() {
        this.setState({
            mails: services.getSentItems()
        })
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.sentMail != nextProps.sentMail) {
            this.setState({
                mails: nextProps.sentMail
            })
        }
    }

    readMail = (data) => {
        this.setState({
            mailReader: true,
            data: data
        })
    }

    closeReader = (ata) => {
        this.setState({
            mailReader: false
        })
    }

    render() {
        return (
            <Aux>
                <SentComponent mails={this.state.mails} mailClick={(data) => this.readMail(data)} />
                <SentReader show={this.state.mailReader} data={this.state.data} modalClosed={this.closeReader}/>
            </Aux>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loginData.loggedIn,
        sentMail: state.mailData.sentMail
    }
}

export default withRouter(connect(mapStateToProps)(Sent));