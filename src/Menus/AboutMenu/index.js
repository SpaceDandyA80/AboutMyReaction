import React from "react";
import Jumbotron from "../../components/Jumbotron"
import Footer from "../../components/Footer"
import resume from "../../assets/images/WebDevResume.pdf"

function AboutMenu() {
  return (
    <div >
      <Jumbotron>
      {/* fix layout to be a card like original */}
      <div className=" text-center">
        <h1>About Me</h1>
        <p className="lead text-muted">
          Just a little bit about me. I have growing knowledge in the tech world
          I'm studying to become a software engineer, specifically a web
          developer. I need to hone my skills in order to create more fluent and
          beautiful web pages in order to land a good job.
        </p>
      </div>
      <hr></hr>

      <div className="card-body bg-secondary">
        <img
          className="img img-thumbnail"
          alt="lines-of-code"
          src="https://inteng-storage.s3.amazonaws.com/img/iea/nR6bkXZxwo/sizes/software-engineering-skills_resize_md.jpg"
          width="150"
          height="150"
        />

        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalLong"
        >
          Click here to view my resume
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  My Resume
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <embed
                  src={resume}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">My Github profile</h2>
              <p className="lead">
                Features most of my projects that i have done to date, check
                them out and be amazed! Click on the Github logo and to see
                them!
              </p>
              <a className="nav-link" href="https://github.com/SpaceDandyA80">
                <img
                  className="ml-3"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/768px-Ei-sc-github.svg.png"
                  alt="github logo"
                  width="80"
                  height="80"
                />
              </a>
            </div>
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">My LinkedIn profile</h2>
              <p className="lead">
                My linkedIn profile can help you contact me and display more
                information about me! Click on the linkedIn logo and to see
                them!
              </p>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/guillermo-garcia-57140a1a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfYzMQVJ%2FTnSATrct6wRdAw%3D%3D"
              >
                <img
                  className="ml-3"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"
                  alt="linkedIn logo"
                  width="50"
                  height="50"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>

<Footer />
      </Jumbotron>
    </div>
  );
}

export default AboutMenu;
