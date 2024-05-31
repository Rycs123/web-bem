import React from "react";
import LogoBem from "../../assets/images/logo/LogoWhite.png";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          <a class="navbar-brand text-white d-flex" href="#logo">
            <img
              src={LogoBem}
              alt="Logo"
              width="auto"
              height="75"
              class="d-inline-block align-text-top"
            />
            <span className="align-self-center">
              Kabinet
              <br />
              Selaras
            </span>
          </a>
          <div className="d-flex text-white">
            <h6 className="mx-4">Home</h6>
            <h6 className="mx-4">Profile</h6>
            <h6 className="mx-4">More</h6>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
