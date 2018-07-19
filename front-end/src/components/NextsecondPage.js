import React, { Component } from 'react';

class Nextsecondpage  extends Component {
  render() {
    return (
        <div className="container">
               <h2> Post a job</h2>  
          <div className="container">
            <div className="row">
                <h3> Describe the Job</h3>
             </div>
            <div className="row">
               <div class="form-group">
                    <lable  className="font-weight-bold">Name your job posting </lable>
                    <p></p>
                    <input type="text" class="form-control" id="usr" name="username"></input>
                    <p> </p>
                    <lable  className="font-weight-bold">Describe the work to be done </lable>
                    <p></p>
                    <input type="text" class="form-control" id="usr" name="username"></input>
                    <small className="text-muted pull-right m-xs-top"> 5000 characters left</small>
                    <div className="col-md-12 p-0-left">
                     <lable  className="font-weight-bold">Attachments </lable>
                        <div className="row m-sm-bottom">
                            <div className="col-md-12">
                                <div className="drop-box"> drag or <label for="PostForm_attachment"> upload</label></div> 
                            </div>
                            <small className="p-0 m-sm-top text-muted"> You may attach up to 5 file under  <strong> 100mb</strong> 
                            </small>
                        </div>
                    </div>
                </div>
            </div>
           </div> 
            <div className="container">
                 <div className="row">
                  <h3> Rate and Availability</h3>
                </div>
                <div className="row">
                     <p class="font-weight-bold">How would you like to pay</p>
                        <select class="form-control col-sm-20" id="">
                         <option>TMC</option>
                         <option>ETH</option>
                         <option>BTC</option>
                        </select>
                  </div>
                  <p></p>
                  
                <div className="row">
                    <button className="btn m-0-top-bottom d-none d-md-inline-block btn-link">Post Job</button>
                    <button className="btn m-0-top-bottom d-none d-md-inline-block btn-link">Preview</button>
            </div>

            </div>
        
            
        </div>

      
    );
  }
}

export default Nextsecondpage;