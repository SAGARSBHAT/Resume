import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="row">
            <div className='container'>
            <div className="col-md-10">
              <center>
                <h2>Resume</h2>
                <h3>Sagar S Bhat</h3>
              </center>
              <hr />
              <div>
                <div className="text-dark">
                  <h3>
                    <center>
                      <u>Skills</u>
                    </center>
                  </h3>
                  <br />
                  <h4>
                    <span className="font-weight-bolder">Languages:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      C, C++, Java, JavaScript, Verilog
                    </span>
                    <br />
                    <br />
                    <span className="font-weight-bolder">Database:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      Mysql,MongoDb
                    </span>
                    <br />
                    <br />
                    <span className="font-weight-bolder">Web Technology:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      HTML,CSS,Bootsrap 3,Bootstrap
                      4,Node.js,Express.js,React.js
                    </span>
                    <br />
                    <br />
                    <span className="font-weight-bolder">Tools:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      VS Code, Android Studio, Eclipse, NetBeans, Multisim, Ride
                    </span>
                    <br />
                    <br />
                  </h4>
                  <hr />
                </div>

                {/*Work Experience*/}
                <div className="text-dark">
                  <h3>
                    <center>
                      <u>Work Experience</u>
                    </center>
                  </h3>
                  <br />
                  <h4>
                    <span className="font-weight-bolder">
                      Jul 2020-present:
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      <span className="font-weight-bold">
                        IITRIS Analytics(WaitlessBuzz)
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>Web Developer Intern</span>
                    </span>
                    <br />
                    <br />
                    <span className="font-weight-bolder">Jun 2020-present</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      <span className="font-weight-bold">Edureka</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>Full Stack Web Developer Intern</span>
                    </span>
                    <br />
                    <br />
                  </h4>
                  <hr />
                </div>
                {/*Education*/}
                <div className="text-dark">
                  <h3>
                    <center>
                      <u>Education</u>
                    </center>
                  </h3>
                  <br />
                  <h4>
                    <span className="font-weight-bolder">2018-2022:</span>
                    &nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      <span className="font-weight-bold">
                        Dayananda Sagar College of Engineering
                      </span>
                      &nbsp;&nbsp;
                      <span>BE(Telecommunication Engineering)GPA-9.15</span>
                    </span>
                    <br />
                    <br />
                    <br />
                    <span className="font-weight-bolder">2016-2018:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      <span className="font-weight-bold">
                        Vijaya Composite Pre University College
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>PUC 1 and PUC 2 (Percentage-90.33%)</span>
                    </span>
                    <br />
                    <br />
                    <br />
                    <span className="font-weight-bolder">2016-2018:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      <span className="font-weight-bold">Royal School</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>High School (Percentage-90.33%)</span>
                    </span>
                    <br />
                    <br />
                  </h4>
                  <hr />
                </div>
                {/*Work Experience*/}
                <div className="text-dark">
                  <h3>
                    <center>
                      <u>Projects</u>
                    </center>
                  </h3>
                  <br />
                  <h4>
                    <span className="font-weight-bolder">Smart Mirror:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      IOT Based Project
                    </span>
                    <br />
                    <br />
                    <span className="font-weight-bolder">Alaram App:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      Android App works for both Time and Calender
                    </span>
                    <br />
                    <br />
                    <span className="font-weight-bolder">TDS App:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      Todo list App which has Email and Password Security
                    </span>
                    <br />
                    <br />
                    <span className="font-weight-bolder">
                      PortFolio Website:
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      Coursera Guided Project
                    </span>
                    <br />
                    <br />
                    <span className="font-weight-bolder">
                      JavaScript ES6-basics
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      Coursera Guided Project
                    </span>
                    <br />
                    <br />
                  </h4>
                  <hr />
                </div>
                {/*Work Experience*/}
                <div className="text-dark">
                  <h3>
                    <center>
                      <u>Certificate</u>
                    </center>
                  </h3>
                  <br />
                  <h4>
                    <span className="font-weight-bolder">NICT</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      Java Basics
                    </span>
                    <br />
                    <br />
                    <span className="font-weight-bolder">Udemy</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      Android App Development
                    </span>
                    <br />
                    <br />
                  </h4>
                  <hr />
                </div>

                <div className="text-dark">
                  <h3>
                    <center>
                      <u>Contact</u>
                    </center>
                  </h3>
                  <br />
                  <h4>
                    <span className="font-weight-bolder">Github:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      <a href="https://github.com/SAGARSBHAT">
                        https://github.com/SAGARSBHAT
                      </a>
                    </span>
                    <br />
                    <br />
                    <span className="font-weight-bolder">Linked In:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="font-weight-normal text-right">
                      <a href="https://www.linkedin.com/in/sagar-s-bhat-1002121a4">
                      https://www.linkedin.com/in/sagar-s-bhat-1002121a4
                      </a>
                    </span>
                    <br />
                    <br />
                  </h4>
                  <hr />
                </div>
                <div></div>
              </div>
            </div>
            </div>
         
            <div className="col-md-2 container">
              <p>
              <img src={require('./image.jpeg')} height='15%' width='100%'/>
              </p>
              </div>
              
          </div>
        </div>
      </React.Fragment>
    );
  }
}
