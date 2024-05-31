import React from "react";
import Header from "../../components/Header";
import kementrianCard from "../../assets/images/kementrianCard.png";
import photoCard from "../../assets/images/photoCard.png";
import Address from "../../components/Address";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const Kemenkoan = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Kemasyarakatan</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam
          architecto magnam in non eum perferendis sequi doloribus sapiente
          dolorum adipisci nemo, sit doloremque tempore aperiam voluptatum,
          consectetur obcaecati laboriosam.
        </p>
        <button>Anggota</button>
        <button>Kementrian</button>
      </div>
      <div>
        <h1>Anggota</h1>
        <div>
          <img src={photoCard} alt="" />
          <img src={photoCard} alt="" />
          <img src={photoCard} alt="" />
        </div>
      </div>
      <div>
        <h1>Kementrian Yang Dinaungi</h1>
        <div>
          <img src={kementrianCard} alt="" />
          <img src={kementrianCard} alt="" />
        </div>
      </div>
      <Address />
      <Menu />
      <Footer />
    </div>
  );
};

export default Kemenkoan;
