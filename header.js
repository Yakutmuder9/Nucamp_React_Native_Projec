/*
======================================
; Title: header.js 
; Author: Yakut Ahmedin
; Date: 03 Jan 2023
; WEB-330 GitHub Page: https://github.com/buwebdev/web-330/tree/master/portfolio
; Description:  Personal Portfolio header
;=====================================
*/

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="navbar">
    <div class="container">
      <div class="header-log">
        <a href="/index.html">
          <img src="./images/logo.png" alt="" />
        </a>
      </div>

      <div class="nav-container">
        <ul class="nav-lists">
          <li>
            <a href="/index.html" class="nav-link"> <i class="fa fa-home"></i> Home </a>
          </li>
          <li>
            <a href="/about.html" class="nav-link"> <i class="fa fa-exclamation"></i> About </a>
          </li>
          <li>
            <a href="/projects.html" class="nav-link"
              ><i class="fa fa-product-hunt"></i> Projects</a
            >
          </li>

          <li class="dropdown">
            <i class="fa fa-star"></i>Features
            <i class="fa fa-angle-down"></i>
            <ul>
              <li>
                <a href="/database.html" class="nav-link"
                  ><i class="fa fa-database"></i> Database Diagrams</a
                >
              </li>
              <li>
                <a href="/api-testing.html" class="nav-link">
                  <i class="fa fa-cube"></i> API Unit Tests</a
                >
              </li>
              <li>
                <a href="./web-430/ahmedin-tech-value-stream.html" class="nav-link">
                  <i class="fa fa-cube"></i>Devops Presentations </a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <nav>
        <ul class="menu container">
          <li>
            <a href="index.html"> <i class="fa fa-home"></i> Home </a>
          </li>
          <li>
            <a href="about.html"> <i class="fa fa-exclamation"></i> About </a>
          </li>
          <li>
            <a href="projects.html"
              ><i class="fa fa-product-hunt"></i> Projects</a
            >
          </li>


          <li>
                <a href="database.html"
                  ><i class="fa fa-database"></i> Database Diagrams</a
                >
              </li>
              <li>
                <a href="api-testing.html">
                  <i class="fa fa-cube"></i> API Unit Tests</a
                >
              </li>
              <li>
                <a href="ahmedin-tech-value-stream.html">
                  <i class="fa fa-cube"></i>Devops Presentations </a
                >
              </li>
          

          <li>
            <button type="submit" class="neon-btn">
              <a href="resume.html">Resume</a>
              <i class="fa fa-caret-right"></i>
            </button>
          </li>
        </ul>
        <div class="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        </nav>
        
        <button type="submit" class="neon-btn fade-out nav-resume-btn" >
          <a href="resume.html" id="resume-a-btn">Resume</a> <i class="fa fa-caret-right"></i>
        </button>
    </div>
  </header>
    `;
  }
}

customElements.define("header-component", Header);
