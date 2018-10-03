import React from 'react';

const sentReader = (props) => {
    return (<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal" style={{ display: `${props.show ? 'block' : 'none'}` }}>
        <div class="modal-backdrop" style={{ opacity: `${props.show ? '0.5' : '0'}` }}></div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button aria-hidden="true" data-dismiss="modal" onClick={() => props.modalClosed(props.data)} class="close" type="button">×</button>
                <h4 class="modal-title">Read Mail</h4>
            </div>
            <div class="modal-body">

                <div class="form-group">
                    <div class="col-lg-10 control-label"><b>Message</b></div><div />
                    <div class="col-lg-10 control-label">From: {props.data.email}, on: {props.data.datetime}</div>
                    <div class="col-lg-10 control-label">Subject: {props.data.subject}</div>
                    <div class="col-lg-10">
                        <div rows="10" cols="30" readOnly id="" name=""
                        >{props.data.body}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div >
    )
}

export default sentReader;