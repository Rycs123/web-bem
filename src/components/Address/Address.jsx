import React from "react";

const Address = () => {
  return (
    <div className="container-fluid">
      <div>
        <h3>Sekretariat BEM ITS</h3>
        <h5>SCC ITS, Keputih Sukolilo Kota SBY, Keputih,</h5>
        <br />
        <h5>Mulyorejo, Surabaya City, East Java 60115</h5>
        <h3>Email</h3>
        <h3>bem@its.ac.id</h3>
      </div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.624383112125!2d112.79103137486453!3d-7.283507592723773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa1344f5802f%3A0x110c1b2a70e34295!2sSekretariat%20BEM%20ITS!5e0!3m2!1sid!2sid!4v1717008498478!5m2!1sid!2sid"
          width={561}
          height={200}
          style={{ border: 0 }}
          allowfullscreen
          title="Sekretariat BEM ITS"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <h2>Get In Touch</h2>
        <p>ig</p>
      </div>
    </div>
  );
};

export default Address;
