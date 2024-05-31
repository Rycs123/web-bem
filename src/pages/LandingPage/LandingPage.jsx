import React from "react";
import Address from "../../components/Address";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import fastLinkCard from "../../assets/images/fastLinkCard.png";
import newsBemCard from "../../assets/images/newsBem.png";
import tripleDots from "../../assets/images/triple-dots.png";
import whiteScreen from "../../assets/images/white-screen.png";
import mainLandingPage from "../../assets/images/mainLandingPage.png";
import "./index.css";

const LandingPage = () => {
  return (
    <div>
      <div className="background-its">
        <Header />
        <main>
          <div class="welcome-container">
            <img src={mainLandingPage} alt="Gambar Selamat Datang" />
            <div className="welcome-text">
              <h1>Selamat Datang</h1>
              <h3>di Official Website BEM ITS</h3>
              <div>
                <button type="button" class="btn btn-primary">
                  Kumpulan SK
                </button>
                <button type="button" class="btn btn-secondary">
                  LPJ
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div>
        <button>
          <img src={tripleDots} alt="" />
        </button>
        <img src={whiteScreen} alt="" />
        <div>
          <p>Posted at 15 January 2022 | 13:10</p>
          <h1>
            Lewat Ini Lho ITS 2022, Mhasiswa Kenalkan ITS Lewat Acara-Acara
            Menarik
          </h1>
        </div>
      </div>
      <div>
        <div>
          <h1>Tautan Cepat</h1>
        </div>
        <div>
          <div>
            <img src={fastLinkCard} alt="" />
            <img src={fastLinkCard} alt="" />
            <img src={fastLinkCard} alt="" />
          </div>
          <div>
            <img src={fastLinkCard} alt="" />
            <img src={fastLinkCard} alt="" />
            <img src={fastLinkCard} alt="" />
          </div>
          <div>
            <img src={fastLinkCard} alt="" />
            <img src={fastLinkCard} alt="" />
            <img src={fastLinkCard} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Kabar BEM</h1>
        </div>
        <div>
          <img src={newsBemCard} alt="" />
          <img src={newsBemCard} alt="" />
          <img src={newsBemCard} alt="" />
        </div>
      </div>
      <Address />
      <Menu />
      <Footer />
    </div>
  );
};

export default LandingPage;
