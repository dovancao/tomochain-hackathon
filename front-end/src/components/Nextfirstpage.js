import React, { Component } from 'react';

class Nextfirstpage extends Component {
  render() {
    return (
        <div className="container"> 
          <h2> Welcome to Upwork </h2>
            <div className="row"> 
              <div className="m-0-bottom" style={{backgroundColor: 'white'}}>
                <h3> What do you need help with? </h3>
              </div>
            </div>

            <div className="row">
              <div className="col-md-9">
                    //Tocode
               </div>
              <div className="col-md-3">
                <div className="m-md-top m-0-top-xl">
                  <span> Select a focus are to attract freelancers with the right experience.</span>
                </div>
             </div>
            </div>

            <div className="row">
                <button className="btn m-0-top-bottom d-none d-md-inline-block btn-link">Back</button>
                <button className="btn m-0-top-bottom d-none d-md-inline-block btn-link">Next</button>
            </div>

        </div>   

      
    );
  }
}

export default Nextfirstpage;