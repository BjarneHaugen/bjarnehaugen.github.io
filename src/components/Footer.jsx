import React from "react";
import "../css/footer.css";

const Footer = () => (
  <footer>
    <div className="footerBarCut"></div>
    <div className="footerBar">
      <div className="innerFooterBar">
        <div className="eirikLink">
          <h3 className="whiteText fontInter">UX by</h3>
          <h3 className="yellowText fontInter">Eirik Granmorken</h3>
        </div>
        <img className="icon" src="/linkedin.svg" alt="linkedin" onClick={() => window.open('https://www.linkedin.com/in/bjarne-haugen/', '_blank')} style={{ cursor: 'pointer' }} />
        <img className="icon" src="/github.svg" alt="github" onClick={() => window.open('https://github.com/bjarnehaugen', '_blank')} style={{ cursor: 'pointer' }} />
        <img className="icon" src="/phone.svg" alt="phone" />
        <h3 className="whiteText fontInter">+ 47 93 80 15 64 </h3>

        <img className="icon" src="/email.svg" alt="email" />
        <h3 className="whiteText fontInter">bjarnewilhelmhaugen@hotmail.com</h3>
      </div>
    </div>
  </footer >
);

export default Footer;
