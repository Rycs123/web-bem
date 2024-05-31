import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import kabinetSelaras from "../../assets/images/Kabinet Selaras.png";
import kabinetSelarasSatu from "../../assets/images/Kabinet Selaras (1).png";
const HomePage = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1>Kabinet</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div>
        <div>
          <img src={kabinetSelaras} alt="" />
          <img src={kabinetSelarasSatu} alt="" />
        </div>
      </div>
      <div>
        <h1>Anggota</h1>
        <img src="" alt="" />
      </div>
      <div>
        <h1>Progress</h1>
      </div>
      <Menu />
      <Footer />
    </div>
  );
};

export default HomePage;
