import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import * as actionBuilder from "../actions/index";
import InboxComponent from './inboxComponent';
import MailReader from './readMailComponent';
import Aux from '../hoc/aux';
import * as services from '../services/index';

class Inbox extends Component {

    state = {
        mailReader: false,
        data: {},
        mails: [],
        ids: []
    }

    componentDidMount() {
        this.props.loadMail();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.mails != nextProps.mails) {
            this.setState({
                mails: nextProps.mails
            })
        }
    }

    readMail = (data) => {
        this.setState({
            mailReader: true,
            data: data
        })
    }

    closeReader = (data) => {
        let returnObj = services.makeRead(data);
        this.setState({
            mailReader: false,
            mails: returnObj.changedInbox
        })
        this.props.updateReadToStorage(returnObj.unread)
    }

    selectMail = (evt, id) => {
        let ids = this.state.ids;
        if (evt.target.checked) {
            this.setState({
                ids: [...this.state.ids, id]
            })
        } else {
            this.setState({
                ids: ids.splice(ids.indexOf(id), 1)
            })
        }
    }

    deleteInbox = (evt) => {
        services.deleteInbox(this.state.ids);
        this.props.loadMail()
        this.props.updateReadToStorage(services.unreadCount())
    }

    render() {
        return (
            <Aux>
                <InboxComponent mails={this.state.mails}
                    mailClick={(data) => this.readMail(data)}
                    selectMail={(evt, id) => this.selectMail(evt, id)}
                    deleteInbox={(evt) => this.deleteInbox(evt)}  />
                <MailReader show={this.state.mailReader} data={this.state.data} modalClosed={(data) => this.closeReader(data)} />
            </Aux>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loginData.loggedIn,
        mails: state.mailData.mails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMail: () => dispatch(actionBuilder.loadMail()),
        updateReadToStorage: (data) => dispatch(actionBuilder.updateReadToStorage(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Inbox));