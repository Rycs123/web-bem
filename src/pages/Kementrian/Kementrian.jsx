import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import card from "../../assets/images/Card.png";

const Kementrian = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Sosmas</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <div>
          <button>1</button>
          <button>2</button>
        </div>
      </div>
      <div>
        <h1>Proker</h1>
        <div>
          <div>
            <div style={{ borderRadius: 25, height: 300, width: 100 }}></div>
            <div style={{ borderRadius: 25, height: 300, width: 100 }}></div>
          </div>
          <div>
            <div style={{ borderRadius: 25, height: 300, width: 100 }}></div>
            <div style={{ borderRadius: 25, height: 300, width: 100 }}></div>
          </div>
          <div>
            <div style={{ borderRadius: 25, height: 300, width: 100 }}></div>
            <div style={{ borderRadius: 25, height: 300, width: 100 }}></div>
          </div>
        </div>
      </div>
      <div>
        <h1>Pengurus Harian</h1>
        <div>
          <img src={card} alt="" />
          <img src={card} alt="" />
          <img src={card} alt="" />
        </div>
      </div>
      <div>
        <h1>Staff</h1>
        <div>
          <img src={card} alt="" />
          <img src={card} alt="" />
          <img src={card} alt="" />
        </div>
      </div>
      <Menu />
      <Footer />
    </div>
  );
};

export default Kementrian;
