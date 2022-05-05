import React from "react";

const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-dark" >
      <div className="container-fluid " >
        <p className="navbar-brand h1" style={{textAlign: "center"}}>
          {" "}
          Santiago Ramos - &copy; {new Date().getFullYear()}{" "}
        </p>
      </div>
    </nav>
  );
};

export default Footer;
