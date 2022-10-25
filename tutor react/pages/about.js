import React from "react";
import "../styles/about.css";

import "../styles/nav.css";

function about() {
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
            <a href="tutors">tutors</a>
          </li>
          <li class="nav__navigation-sep">|</li>
          <li>
            <a href="about.html">about</a>
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
          <a href="about">about</a>
        </nav>
      </nav>
      <section class="hero">
        <div class="content">
          <h2>What is Tutor Finder?</h2>
          <img
            class="iPhone_image"
            src={require("../images/iPhoneTF.jpg")}
            alt="App demo"
          />
        </div>
      </section>
      {/* <section class="summary">
        <div class="accompany_image">
          <img
            src={require("../images/tutorAndStudent.jpg")}
            alt="Tutor and Student"
          />
          <div class="summary_text">
            <p>
              Tutor Finder will help you find the best tutor in the shortest
              time. We let you chose what tutor you want for whatever subject
              you need!
            </p>
          </div>
        </div>
      </section> */}
      <section class="finals">
        <div class="night">
          <img
            src={require("../images/late_night_study.png")}
            alt="Student studing at night"
          />
        </div>
        <div class="finals_info">
          <h2>Have a final the next day?</h2>
          <p>
            One of Tutor Finder's best features is the possibilty to find a
            tutor at the last second. You can find a tutor and schedule a one
            night study session the same night!
          </p>
        </div>
      </section>
      <section class="qualified_tutors">
        <div class="qtImage">
          <img
            src={require("../images/college_graduate.jpg")}
            alt="College Graduate"
          />
        </div>
        <div class="qualified_text">
          <h2>
            Our tutors are highly qualified to assist you in your academic
            career.
          </h2>
          <a href="students.html" class="sites-button outline">
            find a tutor
          </a>
        </div>
      </section>
    </div>
  );
}

export default about;
