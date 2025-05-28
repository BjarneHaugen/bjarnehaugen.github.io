import React from "react";
import "../css/footer.css";

const Footer = () => (
  <footer>
    <div className="footerBarCut"></div>
    <div className="footerBar">
      <div className="innerFooterBar">
        <div
          className="eirikLink"
          onClick={() => window.open("https://granmorken.com/", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <h4 className="whiteText fontInter">
            UX by <span className="yellowText fontInter">Eirik Granmorken</span>
          </h4>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
