import React, { Component } from 'react';
import { connect } from 'react-redux';

import Compose from './composeComponent';
import * as actionBuilder from "../actions/index";
import * as services from '../services';

class ComposeContainer extends Component {
    state = {
        compose: false,
        to: '',
        cc: '',
        subject: '',
        message: ''
    }

    componentWillReceiveProps (nextState) {
        if(this.props.compose != nextState.compose) {
            this.setState ({
                compose: nextState.compose
            }) 
        }
    }

    composeHandler = () => {
        this.setState( { compose: false } );
        this.props.onLoadCompose(false);
    }

    onComposeSubmit = () => {
        services.storeCompose(this.state);
        this.setState( { compose: false } );
        this.props.onLoadCompose(false);
    }

    render() {
        return (
            <Compose show={this.state} modalClosed={this.composeHandler}
            changeTo={(evt) => this.setState({ to: evt.target.value })}
            changeCc={(evt) => this.setState({ cc: evt.target.value })}
            changeSubject={(evt) => this.setState({ subject: evt.target.value })}
            changeMessage={(evt) => this.setState({ message: evt.target.value })}
            clicked={(evt) => this.onComposeSubmit()}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        compose: state.mailData.compose
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadCompose: (value) => dispatch(actionBuilder.onLoadCompose(value)),
        loadMail: () => dispatch(actionBuilder.loadMail()),
        onLoadSentEmails: () => dispatch(actionBuilder.onLoadSentEmails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComposeContainer);