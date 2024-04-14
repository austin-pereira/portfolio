import React from 'react';
import '../Cfiles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <ul className="list-inline text-center">
              {/* Twitter */}
              <li>
                {/* Twitter */}
                  <a href="https://twitter.com/Austin66not2">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
              </li>
              {/* GitHub */}
              <li>
                <a href="https://github.com/AUSt-in">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              {/* LinkedIn */}
              <li>
                <a href="https://www.linkedin.com/in/austin-pereira-558b671b7/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
              {/* Instagram */}
              <li>
                <a href="https://www.instagram.com/auzztin_23/">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
              {/* Email */}
              <li>
                <a href="mailto:pereira.austin6602@berkeley.edu">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </li>
            </ul>
            <p>Austin Pereira 2024 &copy;</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
