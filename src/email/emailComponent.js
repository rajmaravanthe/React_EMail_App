import React from 'react';

const emailComponent = (props) => {
    return (
        <aside className="sm-side">
            <div className="inbox-body">
                <a onClick={props.clicked} data-toggle="modal" title="Compose" className="btn btn-compose">
                    Compose
                    </a>
                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" className="modal fade" >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                                <h4 className="modal-title">Compose</h4>
                            </div>
                            <div className="modal-body">
                                <form role="form" className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">To</label>
                                        <div className="col-lg-10">
                                            <input type="text" placeholder="" id="inputEmail1" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Cc / Bcc</label>
                                        <div className="col-lg-10">
                                            <input type="text" placeholder="" id="cc" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Subject</label>
                                        <div className="col-lg-10">
                                            <input type="text" placeholder="" id="inputPassword1" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Message</label>
                                        <div className="col-lg-10">
                                            <textarea rows="10" cols="30" className="form-control" id="" name=""></textarea>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-lg-offset-2 col-lg-10">
                                            <span className="btn green fileinput-button">
                                                <i className="fa fa-plus fa fa-white"></i>
                                                <span>Attachment</span>
                                                <input type="file" name="files[]" multiple=""></input>
                                            </span>
                                            <button className="btn btn-send" type="submit">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="inbox-nav inbox-divider">
                <li>
                    <h4>FOLDERS</h4> </li>
                <li className="active">
                    <a onClick={props.loadInboxEmails}><i className="fa fa-inbox"></i> Inbox <span className="label label-danger pull-right">{props.count}</span></a>

                </li>
                <li>
                    <a onClick={props.loadSentEmails}><i className="fa fa-envelope-o"></i> Sent Mail</a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-bookmark-o"></i> Important</a>
                </li>
                <li>
                    <a href="#"><i className=" fa fa-external-link"></i> Drafts <span className="label label-info pull-right">30</span></a>
                </li>
                <li>
                    <a><i className=" fa fa-trash-o"></i> Trash</a>
                </li>
            </ul>
            <ul className="navbar-item nav-pills nav-stacked labels-info inbox-divider">
                <li>
                    <h4>CATEGORIES</h4> </li>

                <li class="categories">
                    <a href="#"> <i className=" fa fa-circle text-success"></i> Work </a>
                </li>
                <li class="categories">
                    <a href="#"> <i className=" fa fa-circle text-danger"></i> Documents </a>
                </li>
                <li class="categories">
                    <a href="#"> <i className=" fa fa-circle text-primary"></i> Social </a>
                </li>
                <li class="categories">
                    <a href="#"> <i className=" fa fa-circle text-info"></i> Advertising </a>
                </li>
                <li class="categories">
                    <a href="#"> <i className=" fa fa-circle text-warning"></i> Clients </a>
                </li>
            </ul>
            <ul className="navbar-item nav-pills nav-stacked labels-info ">
                <li>
                    <h4>LABELS</h4> </li>
                <li className="labels">
                    <span class="badge badge-light"><i class="fa fa-tag" aria-hidden="true"></i>
                        Family</span>&nbsp;&nbsp;&nbsp;<span class="badge badge-light"><i class="fa fa-tag" aria-hidden="true"></i>
                        Work</span>&nbsp;&nbsp;&nbsp;<span class="badge badge-light"><i class="fa fa-tag" aria-hidden="true"></i>
                        Home</span>
                </li>
                <li className="labels">
                    <span class="badge badge-light"><i class="fa fa-tag" aria-hidden="true"></i>
                        Children</span>&nbsp;&nbsp;&nbsp;<span class="badge badge-light"><i class="fa fa-tag" aria-hidden="true"></i>
                        Holidays</span>&nbsp;&nbsp;&nbsp;<span class="badge badge-light"><i class="fa fa-tag" aria-hidden="true"></i>
                        Music</span>
                </li>
                <li className="labels">
                    <span class="badge badge-light"><i class="fa fa-tag" aria-hidden="true"></i>
                        Photography</span>&nbsp;&nbsp;&nbsp;<span class="badge badge-light"><i class="fa fa-tag" aria-hidden="true"></i>
                        Film</span>&nbsp;&nbsp;&nbsp;<span class="badge badge-light"><i class="fa fa-tag" aria-hidden="true"></i>
                        Treck</span>
                </li>
            </ul>
        </aside>
    )
}

export default emailComponent;