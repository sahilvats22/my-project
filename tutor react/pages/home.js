import React from "react";
import "../styles/about.css";
import "../styles/app.css";
import "../styles/contact.css";
import "../styles/inner.css";
import "../styles/nav.css";
import "../styles/signup.css";
import "../styles/slick.css";
import "../styles/tutors.css";

function home() {
  return (
    <div>
      <nav class="nav">
        <a href="/" class="nav__logo">
          <img
            src={require("../images/tutor-finder-logo.png")}
            alt="Tutor Finder Logo"
          />
          <p>tutor finder</p>
        </a>
        <ul class="nav__navigation">
          <li>
            <a href="students">students</a>
          </li>
          <li class="nav__navigation-sep">|</li>
          <li>
            <a href="tutor">tutors</a>
          </li>
          <li class="nav__navigation-sep">|</li>
          <li>
            <a href="about">about</a>
          </li>
        </ul>
        <div class="nav__login">
          <div class="nav__login--info">
            <a href="#register" id="current-user-name">
              Log In
            </a>
            <p id="current-user-type" class="nav__login--info-type"></p>
          </div>
          <img src={require("../images/blankuser.png")} alt="Profile Picture" />
        </div>
        <button class="mobile-menu__open" id="menu_btn">
          menu
          <span class="mobile-menu-line"></span>
          <span class="mobile-menu-line"></span>
          <span class="mobile-menu-line"></span>
        </button>
        <nav class="mobile-menu__menu">
          <a href="students">students</a>
          <a href="tutors">tutors</a>
        </nav>
      </nav>
      <section class="hero">
        <img
          alt="man in coffee shop on laptop"
          src={require("../images/front-hero.jpg")}
        />
        <div class="hero__content">
          <p>Qualified tutors</p>
          <p>are in your area</p>
          <a href="students" class="sites-button outline">
            find a tutor
          </a>
        </div>
      </section>
      <section class="info">
        <div class="info__left">
          <p class="info__left-line">
            <span>finding</span> a tutor
          </p>
          <p class="info__left-line">shouldn't be</p>
          <p class="info__left-line">
            so<span> difficult.</span>
          </p>
        </div>
        <div class="info__right" id="register">
          <div class="info__right-content">
            <a href="tutors.html" class="info__right-content-single">
              <p class="info__right-content-single-title">Tutor</p>
              <p class="info__right-content-single-subtitle">
                looking for students?
              </p>
              <div></div>
              <p class="info__right-content-single-looking">
                Register to be a Tutor
              </p>
            </a>
            <a href="students.html" class="info__right-content-single">
              <p class="info__right-content-single-title">Student</p>
              <p class="info__right-content-single-subtitle">
                looking for tutors?
              </p>
              <div></div>
              <p class="info__right-content-single-looking">
                See Available Tutors
              </p>
            </a>
          </div>
        </div>
      </section>
      <section class="tutors">
        <div class="tutors__swipe">Swipe Through Tutors</div>
        <div class="siema">
          <div class="tutors__slide">
            <a href="students" class="tutors__single">
              <img
                class="tutors__single-image"
                src={require("../images/profile-picture.jpg")}
                alt="Tutor's Profile Picture"
              />
              <p class="tutors__single-name">Daniel W.</p>
              <p class="tutors__single-education">Harvard University</p>
              <p class="tutors__single-concentration">Calculus & Physics</p>
              <p class="tutors__single-hire">Hire Daniel</p>
            </a>
          </div>
          <div class="tutors__slide">
            <a href="students" class="tutors__single">
              <img
                class="tutors__single-image"
                src={require("../images/profile-picture2.jpg")}
                alt="Tutor's Profile Picture"
              />
              <p class="tutors__single-name">Josh H.</p>
              <p class="tutors__single-education">Georgia Tech</p>
              <p class="tutors__single-concentration">Computer Science</p>
              <p class="tutors__single-hire">Hire Josh</p>
            </a>
          </div>
          <div class="tutors__slide">
            <a href="students" class="tutors__single">
              <img
                class="tutors__single-image"
                src={require("../images/profile-picture3.jpg")}
                alt="Tutor's Profile Picture"
              />
              <p class="tutors__single-name">Terrance L.</p>
              <p class="tutors__single-education">University of Chicago</p>
              <p class="tutors__single-concentration">Creative Writing</p>
              <p class="tutors__single-hire">Hire Terrance</p>
            </a>
          </div>
        </div>
      </section>
      <footer class="footer">
        <p class="footer__title">
          got a <span>question?</span>
        </p>
        <p class="footer__title">
          <span>get in</span> touch.
        </p>
        <form action="#" method="post" class="footer__form">
          <div class="footer__form-row">
            <input type="text" name="Name" id="sf-name" required />
            <label class="footer__form-row-label">Name *</label>
          </div>
          <div class="footer__form-row">
            <input type="email" name="Email" id="sf-email" />
            <label class="footer__form-row-label">Email *</label>
          </div>
          <div class="footer__form-row">
            <input type="tel" name="Phone" id="sf-phone" />
            <label class="footer__form-row-label">Phone</label>
          </div>
          <div class="footer__form-row lg">
            <textarea name="Message" id="sf-desc" required></textarea>
            <label class="footer__form-row-label">Message *</label>
          </div>
          <div class="footer__form-row submit">
            <button class="footer__form-row-button sites-button red">
              send message
            </button>
          </div>
        </form>
        <p class="footer__copy">
          &copy; 2019 TutorFinder. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default home;
