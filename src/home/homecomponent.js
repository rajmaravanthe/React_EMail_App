import React from 'react';
import 'react-bootstrap';

import '../App.css';
import SideNav from '../sidenav/sidenav';
import Aux from '../hoc/aux';
import Inbox from '../inbox/inboxContainer';
import Email from '../email/emailContainer';
import Sent from '../sent/sentContainer';

const home = (props) => {
    let inboxOrSent = props.inbox ? <Inbox /> : <Sent />
    return (
        <Aux>
            <SideNav width={props.width} clicked={props.toggle}></SideNav>
            <div className="container">
                <div className="search-global d-flex justify-content-between">
                    <div className="search-icon"><div className="hamburg-div"><div className="hamburg"></div></div>&nbsp;&nbsp;&nbsp;&nbsp;Search for something...</div>
                    <div><span><i class="fa fa-envelope" aria-hidden="true"></i><span class="button__badge">{props.read}</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-bell" aria-hidden="true"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;<span onClick={props.clicked} className="signout"><i class="fa fa-sign-out"></i></span>Log out</div>
                </div>
                <div className="mail-box">
                    <Email />
                    {inboxOrSent}
                </div>
            </div>
        </Aux>
    )
}

export default home;
