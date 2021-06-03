import React from "react";
import socialLinks from "../constants/social_links";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
        <div className="footer-links social-links">
          {socialLinks.map(({id, icon, url}) => (
            <a key={id} href={url} className="social-link">
              {icon}
            </a>
          ))}
        </div>
        <h4>
          copyright &copy; {new Date().getFullYear()}
          <span>WebDev</span> all rights reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
