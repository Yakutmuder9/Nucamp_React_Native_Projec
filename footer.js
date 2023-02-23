/*
======================================
; Title: footer.js 
; Author: Yakut Ahmedin
; Date: 03 Jan 2023
; WEB-330 GitHub Page: https://github.com/buwebdev/web-330/tree/master/portfolio
; Description:  Personal Portfolio Footer
;=====================================
*/

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer>
        <div class="container">
            <div class="footer-right">
                <img src="./images/logo.png"/>
                <p>Thank you for visiting my web portfolio! I hope you found it informative and enjoyable to browse. If you have any questions or would like to get in touch, please don't hesitate to reach out. </p>
                <ul>
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
                    ></li> 
                    
                  <li>
                    <a href="api-testing.html">
                      <i class="fa fa-cube"></i> API Unit Tests</a
                    >
                  </li>
                </ul>
                
                <div class="developed-by">
                    <svg width="42" height="36" class="logo-svg" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.6668 17.5076C25.5076 16.2265 24.8712 14.9453 23.9167 14.1446L7.52935 1.01282C5.46101 -0.588687 2.5973 -0.26832 1.00622 1.81357C-0.584855 3.89546 -0.266573 6.77794 1.80176 8.37944L13.7342 17.988L1.80176 27.5965C-0.266573 29.198 -0.584855 32.0807 1.00622 34.1624C2.5973 36.2443 5.46101 36.5646 7.52935 34.9633L23.9167 21.5112C25.0304 20.5502 25.6668 19.2691 25.6668 17.8278V17.5076Z" fill="#692DCD"/>
                        </svg>
                        <p>Developed By Yakut Ahmedin</p>
                        <svg width="40" height="18" viewBox="0 0 40 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.5752 8.00017H20.4153C20.2562 8.00017 19.9379 8.00017 19.7788 8.16018L9.11914 16.6478C8.96 16.8079 8.96 16.9681 9.11914 17.1283C9.11914 17.2885 9.27828 17.2885 9.43742 17.2885H34.7342C37.28 17.2885 39.5073 15.0463 39.3483 12.324C39.1892 9.76169 36.9617 8.00017 34.5752 8.00017Z" fill="#9784E3"/>
                            <path d="M9.22786 4.64417C9.22786 7.20644 7.15952 9.28833 4.61393 9.28833C2.06834 9.28833 0 7.20644 0 4.64417C0 2.08189 2.06834 0 4.61393 0C7.15952 0 9.22786 2.08189 9.22786 4.64417Z" fill="#FE2F67"/>
                            </svg>
                            

                        
                </div>
            </div>

            <div class="footer-left">
                <h3><svg width="54" height="54" viewBox="0 0 54 54"  fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.75 38.25H15.75C12.6375 38.25 9.984 37.1528 7.7895 34.9583C5.595 32.7638 4.4985 30.111 4.5 27C4.5 23.8875 5.59725 21.234 7.79175 19.0395C9.98625 16.845 12.639 15.7485 15.75 15.75H24.75V20.25H15.75C13.875 20.25 12.2813 20.9063 10.9688 22.2188C9.65625 23.5313 9 25.125 9 27C9 28.875 9.65625 30.4688 10.9688 31.7813C12.2813 33.0938 13.875 33.75 15.75 33.75H24.75V38.25ZM18 29.25V24.75H36V29.25H18ZM29.25 38.25V33.75H38.25C40.125 33.75 41.7188 33.0938 43.0312 31.7813C44.3438 30.4688 45 28.875 45 27C45 25.125 44.3438 23.5313 43.0312 22.2188C41.7188 20.9063 40.125 20.25 38.25 20.25H29.25V15.75H38.25C41.3625 15.75 44.016 16.8473 46.2105 19.0418C48.405 21.2363 49.5015 23.889 49.5 27C49.5 30.1125 48.4028 32.766 46.2083 34.9605C44.0138 37.155 41.361 38.2515 38.25 38.25H29.25Z" fill="#FE2F67"/>
                    </svg> Socail link</h3>
                     <ul class="u-link">
                        <li><a href="">- Bellevue Universities Web Development Degree</a></li>
                        <li><a href="">- Bellevue Universities Course's YouTube channel.</a></li>
                        <li><a href="">- Bellevue Universities  Courses GitHub Repositories.</a></li>
                        <li><a href="">- My GitHub Repositories.</a></li>
                     </ul>

                     <div class="contact-me">
                        <div class="social-link-glass">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <input placeholder="Contact me here!" />
                        <button>Say Hello</button>
                     </div>

                     <div class="social-link">
                        <div>
                            <div class="social-link-glass">
                                <i class="fa fa-github"></i>
                            </div>
                            <div class="social-link-glass">
                              <i class="fa fa-envelope"></i>
                           </div>
                        </div>
                     </div>
            </div> 
           
        </div>
    </footer>
        `;
  }
}

customElements.define("footer-component", Footer);
