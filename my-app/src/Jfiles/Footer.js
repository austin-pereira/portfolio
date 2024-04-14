import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../Cfiles/Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <ul className="list-inline">
                <li>
                  <a href="https://twitter.com/Austin66not2">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/AUSt-in">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/austin-pereira-558b671b7/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/auzztin_23/">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="mailto:pereira.austin6602@berkeley.edu">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=DaMPGZUAAAAJ">
                    <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                  </a>
                </li>
              </ul>
              <p>Austin Pereira 2024 &copy;</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
