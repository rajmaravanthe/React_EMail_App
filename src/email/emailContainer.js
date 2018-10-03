import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmailComponent from './emailComponent';
import ComposeComponent from '../compose/composeContainer';
import * as actionBuilder from "../actions/actionBuilder";
import Aux from '../hoc/aux';
import * as services from '../services'

class Email extends Component {

    updateCompose = () => {
        this.props.onLoadCompose(true);
    }

    render() {
        return (
            <Aux>
                <EmailComponent count={services.getInboxCount()} clicked={this.updateCompose} loadInboxEmails={this.props.onLoadInboxEmails} loadSentEmails={this.props.onLoadSentEmails}/>
                <ComposeComponent></ComposeComponent>
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        compose: state.mailData.compose,
        ids: state.mailData.ids
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadCompose: (value) => dispatch(actionBuilder.onLoadCompose(value)),
        onLoadInboxEmails: () => dispatch(actionBuilder.loadMail()),
        onLoadSentEmails: (value) => dispatch(actionBuilder.onLoadSentEmails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Email);