import React from 'react';
import './FooterNote.css';

const FooterNote = (props) => {
  return (
    <div className="FooterNote">
      <div className="FooterNote__wrapper">
        <div className="FooterNote__note">
          <div className="FooterNote__links">
            <a href="#" className="FooterNote__links__link">Terms</a>/
            <a href="#" className="FooterNote__links__link">Privacy</a>/
            <a href="#" className="FooterNote__links__link">Sitemap</a>
          </div>
          Willsquad is a registered trademark of Willsquad Corporation.<br />
          All Rights Reserved &copy; { new Date().getFullYear() }
        </div>
      </div>
    </div>
  );
};

export default FooterNote;
