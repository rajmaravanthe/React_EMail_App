import React from 'react';
import SideNav, { Nav, NavIcon, NavText, NavItem } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_dashboard } from 'react-icons-kit/md/ic_dashboard';
import { layout } from 'react-icons-kit/feather/layout';
import { ic_graphic_eq } from 'react-icons-kit/md/ic_graphic_eq';
import { ic_mail } from 'react-icons-kit/md/ic_mail';
import { ic_pie_chart } from 'react-icons-kit/md/ic_pie_chart';
import { ic_widgets } from 'react-icons-kit/md/ic_widgets';
import { ic_book } from 'react-icons-kit/md/ic_book';
import { ic_apps } from 'react-icons-kit/md/ic_apps';

import './sidenav.css';


//specify the base color/background of the parent container if needed
const MySideNav = (props) => (
    <div className="nav" style={{ width: `${props.width}%` }}>
        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected=''>
            <div className="toggle" onClick={props.clicked} style={{ display: `${props.width == 18 ? 'none' : 'block'}` }}>IN+</div>
            <div style={{ display: `${props.width == 3 ? 'none' : 'block'}` }}>
                <div className="image"></div>
                <div className="personal-info">Rajesha Maravanthe
                <div>UI Developer&nbsp;&nbsp;<i class="fa fa-caret-down"></i></div>
                </div>
            </div>
            <Nav id='dashboard'>
                <NavIcon><SvgIcon size={20} icon={ic_dashboard} /></NavIcon>
                <NavText> Dashboard </NavText>
            </Nav>
            <Nav id='layout'>
                <NavIcon><SvgIcon size={20} icon={layout} /></NavIcon>
                <NavText> Layout </NavText>
            </Nav>
            <Nav id='graphics'>
                <NavIcon><SvgIcon size={20} icon={ic_graphic_eq} /></NavIcon>
                <NavText> Graphics </NavText>
            </Nav>
            <div className="mail" onClick={props.clicked}>
                <Nav id='mailbox'>
                    <NavIcon><SvgIcon size={20} icon={ic_mail} /></NavIcon>
                    <NavText> Mail </NavText>
                    <NavItem>Inbox</NavItem>
                </Nav>
            </div>
            <div className="mailbox">
                <div className="submenu">Inbox</div>
                <div className="submenu">Email view</div>
                <div className="submenu">Compose email</div>
                <div className="submenu">Email template</div>
            </div>
            <Nav id='metrics'>
                <NavIcon><SvgIcon size={20} icon={ic_pie_chart} /></NavIcon>
                <NavText> Metrics </NavText>
            </Nav>
            <Nav id='widget'>
                <NavIcon><SvgIcon size={20} icon={ic_widgets} /></NavIcon>
                <NavText> Widgets </NavText>
            </Nav>
            <Nav id='forms'>
                <NavIcon><SvgIcon size={20} icon={ic_book} /></NavIcon>
                <NavText> Forms </NavText>
            </Nav>
            <Nav id='appviews'>
                <NavIcon><SvgIcon size={20} icon={ic_apps} /></NavIcon>
                <NavText> App Views </NavText>
            </Nav>
        </SideNav>
    </div>
)

export default MySideNav;
