import React from 'react';
import './SocialMediaLinks.css';

import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import youtube from './images/youtube.svg';
import instagram from './images/instagram.svg';
import linkedin from './images/linkedin.svg';
import pinterest from './images/pinterest.svg';
import dribbble from './images/dribbble.svg';

const SocialMediaLinks = (props) => {
  return (
    <div className="SocialMediaLinks">
      <a href="#" className="SocialMediaLinks__item SocialMediaLinks__item--twitter">
        <img src={twitter} />
      </a>
      <a href="#" className="SocialMediaLinks__item SocialMediaLinks__item--facebook">
        <img src={facebook} />
      </a>
      <a href="#" className="SocialMediaLinks__item SocialMediaLinks__item--instagram">
        <img src={instagram} />
      </a>
      <a href="#" className="SocialMediaLinks__item SocialMediaLinks__item--linkedin">
        <img src={linkedin} />
      </a>
      <a href="#" className="SocialMediaLinks__item SocialMediaLinks__item--youtube">
        <img src={youtube} />
      </a>
      <a href="#" className="SocialMediaLinks__item SocialMediaLinks__item--pinterest">
        <img src={pinterest} />
      </a>
      <a href="#" className="SocialMediaLinks__item SocialMediaLinks__item--dribbble">
        <img src={dribbble} />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
