import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer"
import street from "../../assets/images/streetlights.jpg";
import password from "../../assets/images/passwordgen.png";
import reminder from "../../assets/images/reminder.png";
import weather from "../../assets/images/weatherDashboard.png";

// future application switch javascript carousel to react
function PortfolioMenu() {
  return (
    <div className="bg-secondary">
     
          <Jumbotron>
          <h1>All of my Projects</h1>
            <p className="lead text-muted">
              Behold all of my biggest projects to date.
            </p>
        
        <hr></hr>
     
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
              <li className="bg-secondary"
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li className="bg-secondary"
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li className="bg-secondary"
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a className="nav-link" href="https://spacedandya80.github.io/project1/jobcitysearch.html">
                  <img
                    border="0"
                    alt="street lights"
                    src={street}
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
                <a className="nav-link" href="https://spacedandya80.github.io/passwordgen/">
                  <img
                    border="0"
                    alt="password generator"
                    src={password}
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
                <a className="nav-link" href="https://spacedandya80.github.io/weatherDashboard/weatherDash/weather.html">
                  <img
                    border="0"
                    alt="weather-dashboard"
                    src={weather}
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
                    src={reminder}
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
<Footer />
        </main>
        </Jumbotron>
    </div>
  );
}
export default PortfolioMenu;
