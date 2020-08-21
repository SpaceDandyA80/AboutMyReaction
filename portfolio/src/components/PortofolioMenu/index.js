import React from "react";

function PortfolioMenu() {
  return (
    <div>
      <section className="jumbotron" id="container">
        <br />
        <section className="jumbotron text-center">
          <div className="container">
            <h1>All of my Projects</h1>
            <p className="lead text-muted">
              Behold all of my biggest projects to date.
            </p>
          </div>
        </section>
        <main>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a className="nav-link" href="./jobsearch/jobcitysearch.html">
                  <img
                    border="0"
                    alt="street lights"
                    src="./assets/images/streetlights.jpg"
                  />
                </a>

                <div className="carousel-caption d-none d-md-block">
                  <h5>Project 1 Job City Search</h5>
                  <p>
                    A group project with 2 other developers to make an App that
                    takes your inputted location and job position and gives you
                    a listing offers as well as the weather of the location.
                    <a
                      className="nav-link"
                      href="https://github.com/SpaceDandyA80/project1.git"
                    >
                      Github repository for my Project{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <a className="nav-link" href="./passgen/passwordcreate.html">
                  <img
                    border="0"
                    alt="password generator"
                    src="./assets/images/passwordgen.png"
                  />
                </a>
                <div className="carousel-caption d-none d-md-block text-dark">
                  <h5>Password Generation</h5>
                  <p>
                    A password generator, it prompts you for certain parameters
                    and based on what you have selected it will generate you a
                    password.
                    <a
                      className="nav-link"
                      href="https://github.com/SpaceDandyA80/passwordgen.git"
                    >
                      Github repository for my password generator{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <a className="nav-link" href="./weatherDash/weather.html">
                  <img
                    border="0"
                    alt="password generator"
                    src="./assets/images/weatherDashboard.png"
                  />
                </a>
                <div className="carousel-caption d-none d-md-block text-dark">
                  <h5>Weather Dashboard</h5>
                  <p>
                    A weather app that will take the users input of a city and
                    will give them the current weather
                    <a
                      className="nav-link"
                      href="https://github.com/SpaceDandyA80/weatherDashboard.git"
                    >
                      Github repository for my Weather Dashboard{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <a
                  className="nav-link"
                  href="https://secure-brushlands-04759.herokuapp.com/"
                >
                  <img
                    border="0"
                    alt="bill reminder"
                    src="./assets/images/reminder.png"
                  />
                </a>
                <div className="carousel-caption d-none d-md-block text-dark">
                  <h5>Bill and Subscriptions App</h5>
                  <p>
                    An app that will allow you to add your bills and
                    subcriptions and remind you when it is and how much is due.
                    <a
                      className="nav-link"
                      href="https://github.com/blakshep1981/Bill-and-Subscription-Reminder-Application"
                    >
                      Github repository for the Bill and Subscriptions reminder
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <br />

          <footer className="row footer">
            <section className="col">
              <p className="text-center">
                <small>
                  <i>Copyright&copy;</i>
                </small>
              </p>
            </section>
          </footer>
        </main>
      </section>
    </div>
  );
}
export default PortfolioMenu;
