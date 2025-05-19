import React from "react";
import "../css/footer.css";

const Footer = () => (
  <footer>
    <div className="footerBarCut"></div>
    <div className="footerBar">
      <div className="innerFooterBar">
        <div className="eirikLink">
          <h3 className="whiteText">UX by</h3>
          <h3 className="yellowText">Eirik Granmorken</h3>
        </div>
        <img className="icon" src="/linkedin.svg" alt="linkedin" />
        <img className="icon" src="/github.svg" alt="github" />

        <h3 className="whiteText">+ 47 93 80 15 64 </h3>

        <h3 className="whiteText">bjarnewilhelmhaugen@hotmail.com</h3>
      </div>
    </div>
  </footer >
);

export default Footer;
