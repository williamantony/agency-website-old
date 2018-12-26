import React from 'react';
import './FooterSocialLinks.css';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

const FooterSocialLinks = (props) => {
  return (
    <div className="FooterSocialLinks">
      <div className="FooterSocialLinks__wrapper">
        <SocialMediaLinks />
      </div>
    </div>
  );
}

export default FooterSocialLinks;
