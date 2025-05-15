import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="iqviaFooter">
      <div className="footerContent">
        <div className="topSection">
            <p className="disclaimer">
              IQVIA Cardiac Safety Web Portal site is best viewed with the browsers Chrome, Edge Chromium and Internet Explorer Version 11 and above, in 1024x768 resolution.
            </p>
            <p className="popupInfo">
              The pop-up window session in this Web site displays important updates regarding your study. Please enable pop-up windows for this Web site.
            </p>
        </div>
        <div className="bottomSection">
          <div className="copyright">
            Copyright &copy; {new Date().getFullYear()} IQVIA. All rights reserved.
          </div>
          <div className="footerLinks">
            <Link to="https://cardiacsafety-test.quintiles.com/WebPages/privacy.htm" className="footerLink" target="_blank">Privacy</Link>
            <span className="separator">|</span>
            <Link to="https://cardiacsafety-test.quintiles.com/WebPages/terms.htm" className="footerLink" target="_blank">Terms of Use</Link>
            <span className="separator">|</span>
            <Link to="https://www.iqvia.com/" className="footerLink" target="_blank">
              Company Information and Contact Links
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
