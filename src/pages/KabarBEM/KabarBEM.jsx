import React from "react";
import Header from "../../components/Header";
import Address from "../../components/Address";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import article from "../../assets/images/article.png";
import kabarDariBem from "../../assets/images/kabarDariBem.png";

const KabarBEM = () => {
  return (
    <div>
      <Header />
      <h1>Kabar Dari BEM ITS</h1>
      <div>
        <h4>Most Reads</h4>
        <img src={kabarDariBem} alt="" />
        <img src={kabarDariBem} alt="" />
        <img src={kabarDariBem} alt="" />
      </div>
      <div>
        <h1>Kategori</h1>
        <div>
          <a href="#">Kabar Dari BEM ITS</a>
          <a href="#">Pendidikan</a>
          <a href="#">Kategori Lain</a>
          <a href="#">Komstrat</a>
        </div>
      </div>
      <div>
        <h1>Kabar Terbaru Serta Artikel Menarik Dari BEM ITS</h1>
        <div>
          <img src={article} alt="" />
          <img src={article} alt="" />
        </div>
      </div>
      <Address />
      <Menu />
      <Footer />
    </div>
  );
};

export default KabarBEM;
