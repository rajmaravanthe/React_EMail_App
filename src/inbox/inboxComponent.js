import React from 'react';

const inboxComponent = (props) => {
    let mails = [];
    if (props.mails.length > 0) {
        mails = props.mails.map(mail => {
            return (
                <tr className={mail.unread ? "unread": ""} >
                    <td className="inbox-small-cells">
                        <input type="checkbox" name={mail.id} onClick={(evt) => props.selectMail(evt,mail.id)} className="mail-checkbox"></input>
                    </td>
                    <td className="inbox-small-cells" onClick={(evt) => props.mailClick(mail, evt)}><i className="fa fa-star"></i></td>
                    <td className="view-message  dont-show" onClick={(evt) => props.mailClick(mail, evt)}>{mail.username}</td>
                    <td className="view-message " onClick={(evt) => props.mailClick(mail, evt)}>{mail.subject}</td>
                    <td className="view-message  inbox-small-cells" onClick={(evt) => props.mailClick(mail, evt)}><i className="fa fa-paperclip"></i></td>
                    <td className="view-message  text-right">{mail.datetime}</td>
                </tr>
            )
        })
    }
    return (
        <aside className="lg-side">
            <div className="inbox-head">
                <h3>Inbox ({props.mails.length})</h3>
                <form action="#" className="pull-right position">
                    <div className="input-append">
                        <input type="text" className="sr-input" placeholder="Search Mail"></input>
                        <button className="btn sr-btn" type="button"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
            <div className="inbox-body">
                <div className="mail-option">
                    <div className="chk-all">
                        <input type="checkbox" className="mail-checkbox mail-group-checkbox"></input>
                        <div className="btn-group">
                            <a data-toggle="dropdown" href="#" className="btn mini all" aria-expanded="false">
                                All
                                     <i className="fa fa-angle-down "></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#"> None</a></li>
                                <li><a href="#"> Read</a></li>
                                <li><a href="#"> Unread</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="btn-group">
                        <a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="#" className="btn mini tooltips">
                            <i className=" fa fa-refresh"></i>
                        </a>
                    </div>
                    <div className="btn-group hidden-phone">
                        <a data-toggle="dropdown" href="#" className="btn mini blue" aria-expanded="false">
                            More
                                 <i className="fa fa-angle-down "></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                            <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                            <li className="divider"></li>
                            <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                        </ul>
                    </div>
                    <div className="btn-group">
                        <a data-toggle="dropdown" href="#" className="btn mini blue">
                            Move to
                                 <i className="fa fa-angle-down "></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                            <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                            <li className="divider"></li>
                            <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                        </ul>
                    </div>
                    <div className="btn-group"><a onClick={(evt)=>props.deleteInbox(evt)} className="btn mini blue" href="#"><i className="fa fa-trash"></i></a></div>

                    <ul className="unstyled inbox-pagination">
                        <li><span></span></li>
                        <li>
                            <a className="np-btn" href="#"><i className="fa fa-angle-left  pagination-left"></i></a>
                        </li>
                        <li>
                            <a className="np-btn" href="#"><i className="fa fa-angle-right pagination-right"></i></a>
                        </li>
                    </ul>
                </div>
                <table className="table table-inbox table-hover">
                    <tbody>
                        {mails}
                    </tbody>
                </table>
            </div>
        </aside>
    )
}

export default inboxComponent;