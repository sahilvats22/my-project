import React from "react";
import toast from 'react-hot-toast';
import "../styles/inner.css";
import "../styles/nav.css";

function student() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Form = React.useRef(null);

  return (
    <div>
      <nav class="nav">
        <a href="index.html" class="nav__logo">
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
            <a href="about">about</a>
          </li>
        </ul>
        <div class="nav__login">
          <div class="nav__login--info">
            <a href="#" id="current-user-name">
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
      <section class="signup">
        <div class="signup__overlay"></div>
        <img alt="Glasses on top of noteobok" src="src/images/forms-bg.jpg" />
        <h2 class="signup__title">
          find a <span>tutor.</span>
        </h2>
        <form
          id="student__signup"
          method="POST"
          class="student__signup signup__form"
          ref={Form}
          onSubmit={(e) => {
            e.preventDefault();
            toast.success('You have successfully signed up! We will contact you as soon as possible with best teachers list.');
            Form.current.reset();
          }}
        >
          <div class="signup__form-row">
            <input type="text" name="Name" id="sf-name" required />
            <label class="signup__form-row-label">Name *</label>
          </div>
          <div class="signup__form-row">
            <input type="email" name="Email" id="sf-email" />
            <label class="signup__form-row-label">Email *</label>
          </div>
          <div class="signup__form-row">
            <input type="number" name="Zip Code" id="sf-zip" required />
            <label class="signup__form-row-label">Zip Code*</label>
          </div>
          <div class="signup__form-row lg radio">
            <label class="signup__form-row-label">
              Topics That Interest You{" "}
            </label>
            <br />
            <input
              class="check-input"
              type="checkbox"
              name="english"
              value="english"
            />
            English <br />
            <input
              class="check-input"
              type="checkbox"
              name="math"
              value="math"
            />
            Math <br />
            <input
              class="check-input"
              type="checkbox"
              name="biology"
              value="biology"
            />
            Biology <br />
            <input
              class="check-input"
              type="checkbox"
              name="chemistry"
              value="chemistry"
            />
            Chemistry
            <br />
            <input
              class="check-input"
              type="checkbox"
              name="physics"
              value="physics"
            />
            Physics <br />
            <input
              class="check-input"
              type="checkbox"
              name="history"
              value="history"
            />
            History <br />
          </div>
          <div class="signup__form-row">
            <select id="distance" required>
              <option value="">Choose...</option>
              <option value="5">5 miles</option>
              <option value="10">10 miles</option>
              <option value="15">15 miles</option>
              <option value="20">20 miles</option>
              <option value="25">25 miles</option>
            </select>
            <label class="signup__form-row-label">Maximum Distance</label>
          </div>
          <div class="signup__form-row lg submit">
            <button
              type="submit"
              class="signup__form-row-button sites-button red"
            >
              find tutors
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default student;
