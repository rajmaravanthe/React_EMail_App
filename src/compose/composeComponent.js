

import React from 'react';

const compose = (props) => {
    return (
        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal" style={{ display: `${props.show.compose ? 'block' : 'none'}` }}>
            <div class="modal-backdrop" style={{ opacity: `${props.show.compose ? '0.5' : '0'}` }}></div>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" onClick={props.modalClosed} class="close" type="button">×</button>
                        <h4 class="modal-title">Compose</h4>
                    </div>
                    <div class="modal-body">
                        <form role="form" class="form-horizontal">
                            <div class="form-group">
                                <label class="col-lg-2 control-label">To</label>
                                <div class="col-lg-10">
                                    <input type="text" placeholder="" id="inputEmail1" class="form-control"
                                        value={props.to}
                                        onChange={(evt) => props.changeTo(evt)}
                                    ></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-2 control-label">Cc / Bcc</label>
                                <div class="col-lg-10">
                                    <input type="text" placeholder="" id="cc" class="form-control"
                                        value={props.cc}
                                        onChange={(evt) => props.changeCc(evt)}></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-2 control-label">Subject</label>
                                <div class="col-lg-10">
                                    <input type="text" placeholder="" id="inputPassword1" class="form-control"
                                        value={props.subject}
                                        onChange={(evt) => props.changeSubject(evt)}></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-2 control-label">Message</label>
                                <div class="col-lg-10">
                                    <textarea rows="10" cols="30" class="form-control" id="" name=""
                                        value={props.message}
                                        onChange={(evt) => props.changeMessage(evt)}></textarea>
                                </div>
                            </div>
                        </form>
                        <div class="form-group">
                            <div class="col-lg-offset-2 col-lg-10">
                                <button class="btn btn-send" onClick={props.clicked}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compose;