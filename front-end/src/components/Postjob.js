import React, { Component } from 'react';

class Postjob  extends Component {
  render() {
    return (
      <div className="container"> 
        <h2> Welcome to Upwork </h2>
        <div className="row"> 
          <div className="" style={{backgroundColor: 'white'}}>
             <h3> What do you need help with? </h3>
          </div>
        </div> 
        <p> </p> 
        <div className="row">
             <div classname="col-md-9">
              <div className="container">
               <p class="font-weight-bold">Tell us what type of work you want done</p>
                <select class="form-control col-sm-20" id="">
                  <option>Web Development</option>
                  <option>Writer</option>
                </select>
               <p> </p>

               <p class="font-weight-bold">What do you want to name your job post? </p>
                 <select class="form-control" id="">
                    <option> aaaa </option>
                   <option>Writer</option>
                  </select>
               <p> </p>
              </div>                 

                  <div class="p-sm-left-right">
                    <p className="m-xs-bottom text-muted"> Example </p>
                    <ul>
                      <li >
                        <p class="m-0">Development help needed for a new Android healthcare app </p>
                      </li>
                      <li >
                        <p class="m-0">Video producer needed for time saving app </p>
                      </li>
                      <li>
                        <p classNam="m-0"> Need search engine optimization & link building expert </p>
                      </li>
                    </ul>  
                  </div>
        </div>
            <div className="col-md-3">
                <div className="m-0-top-bottom- d-block"> 
                <p class="font-weight-bold">How it works</p>
                    <ol className="m-lg-bottom">
                        <li>Find - 
                         <span> Post a job. We'll  match you with experts.</span> 
                        </li>
                        <li>Find - 
                         <span> Post a job. We'll  match you with experts.</span> 
                        </li>
                        <li>Find - 
                         <span> Post a job. We'll  match you with experts.</span> 
                        </li>
                    </ol>

              </div>
            </div>
        </div>  
        <div className="row">
            <button className="btn m-0-top-bottom d-none d-md-inline-block btn-link">Seach for freelancers</button>
            <button className="btn m-0-top-bottom btn-primary">Continue to Job post</button>
 
        </div>
           
      </div>
    );
  }
}

export default Postjob ;