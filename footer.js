/*
======================================
; Title: footer.js 
; Author: Yakut Ahmedin
; Date: 03 Jan 2023
; WEB-330 GitHub Page: https://github.com/buwebdev/web-330/tree/master/portfolio
; Description:  Personal Portfolio Footer
;=====================================
*/

class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <p>
                    Copyright &copy; 2021 <a href="#">Bellevue University</a>
                </p>
                <i class="fa fa-terminal"></i>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);