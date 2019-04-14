import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="brandName"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="./index.html"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io">
              Home
            </a>

            <a className="navbar-item" href="https://bulma.io">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="https://bulma.io">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item" href="https://bulma.io">
                  About
                </a>
                <a className="navbar-item" href="https://bulma.io">
                  Jobs
                </a>
                <a className="navbar-item" href="https://bulma.io">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="https://bulma.io">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-primary">
                  <strong>Sign up</strong>
                </button>
                <button className="button is-light">Log in</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
