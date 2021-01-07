import React from 'react';
import {Button} from "./Button";
import './Footer.css';
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subsctiption-heading">
          Join the Adventure newsletter to receive our best vacation daals
        </p>
        <p className="footer-subsctiption-text">
          You can unsubsctibe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Your email" className="footer-input"/>
            <Button buttonStyle="btn--outline">Subsctibe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sing-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sing-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/sing-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/sing-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="cocial-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <i className="fab fa-typo3"/>
            </Link>
          </div>
          <small className="website-rights">TRVL 2020</small>
          <div className="social-icons">
            <Link to="/" target="_blank" area-label="Facebook" className="social-icon-link facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" target="_blank" area-label="Instagram" className="social-icon-link instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link class='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
              <i class='fab fa-youtube'/>
            </Link>
            <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
              <i class='fab fa-twitter'/>
            </Link>
            <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'>
              <i class='fab fa-linkedin'/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}