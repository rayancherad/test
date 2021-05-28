const headingEl = document.querySelector(".heading-primary-main");
const headingCursor = document.querySelector(".heading-cursor");
const contactForm = document.querySelector(".contact-form");
const contactEmail = document.querySelector(".email");
const contactSubject = document.querySelector(".subject");
const contactMessage = document.querySelector(".message");
const logoBox = document.querySelector(".logo-box");
const logo = document.querySelector(".logo");
const logoName = document.querySelector(".logo-name");
const header = document.getElementById("header");
const experienceEl = document.getElementById("experiences");
const main = document.querySelector(".main");

let headingText = headingEl.textContent;
const headingTextLength = headingText.length;
const newText = "Rayan Cherad.";

// init
if (screen.width < 1088) {
  document.body.innerHTML =
    "<h1>Cannot Open the website on mobile screen!</h1>";
  throw new Error("Cannot Open the website on mobile screen!");
}

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function changeText() {
  await timer(1500);
  for (let i = 0; i < headingTextLength; i++) {
    headingText = headingText.substring(0, headingText.length - 1);
    headingEl.textContent = `${headingText}|`;
    if (!headingEl.textContent) headingEl.textContent = "|";
    await timer(120);
  }
  await timer(500);
  for (let i = 0; i < newText.length; i++) {
    headingEl.textContent = `${newText.substring(0, i + 1)}`;
    await timer(120);
  }
  headingEl.textContent.slice(0, -1);
  headingCursor.classList.add("heading-cursor__toggle");
  let i = 0;
  while (i < 2000) {
    if (headingCursor.textContent) headingCursor.textContent = "";
    else headingCursor.textContent = "|";
    i++;
    await timer(700);
  }
}

changeText();

logo.addEventListener("mouseover", () => {
  logoName.classList.remove("logo-name__leave-animate");
  logoName.classList.remove("logo-name__start-animate");
  logoName.classList.add("logo-name__display-animate");
  logoName.classList.remove("logo-name__hidden");
  logoBox.removeChild(logoName);
  logoBox.appendChild(logoName);
});

logoBox.addEventListener("mouseleave", () => {
  logoName.classList.remove("logo-name__display-animate");
  logoName.classList.add("logo-name__leave-animate");
  logoName.classList.add("logo-name__hidden");
  logoBox.removeChild(logoName);
  logoBox.appendChild(logoName);
});

const stickyNav = (entries) => {
  const [entry] = entries;
  const nav = `
    <nav class="clearfix" id="nav">
      <a href="/">
        <div class="logo-container">
          <img src="assets/logo3.png" alt="Rayan Cherad" class="nav-logo" />
          <span
            class="nav__logo-name logo-name__start-animate logo-name__hidden"
            >Rayan Cherad</span
          >
        </div>
      </a>
      <div class="links-container">
        <ul class="navigation">
          <li><a href="#header">Accueil</a></li>
          <li><a href="#experiences">Expériences</a></li>
          <li><a href="#contact">Contact</a></li>
          <a href="#" class="small-btn btn-outline-black">Savoir plus</a>
        </ul>
      </div>
      <hr class="container-end" />
    </nav>
  `;
  if (!entry.isIntersecting) {
    document.body.insertAdjacentHTML("afterbegin", nav);
    const navLogoContainer = document.querySelector(".logo-container");
    const navLogo = document.querySelector(".nav-logo");
    const navLogoName = document.querySelector(".nav__logo-name");

    navLogo.addEventListener("mouseover", () => {
      navLogoName.classList.remove("logo-name__leave-animate");
      navLogoName.classList.remove("logo-name__start-animate");
      navLogoName.classList.add("logo-name__display-animate");
      navLogoName.classList.remove("logo-name__hidden");
      navLogoContainer.removeChild(navLogoName);
      navLogoContainer.appendChild(navLogoName);
    });

    navLogoContainer.addEventListener("mouseleave", () => {
      navLogoName.classList.remove("logo-name__display-animate");
      navLogoName.classList.add("logo-name__leave-animate");
      navLogoName.classList.add("logo-name__hidden");
      navLogoContainer.removeChild(navLogoName);
      navLogoContainer.appendChild(navLogoName);
    });
  } else {
    const nav = document.getElementById("nav");
    if (nav) {
      // nav.classList.add("remove-nav");
      document.body.removeChild(nav);
    }
  }
};
const intersectObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-85px",
});

intersectObserver.observe(header);
let closePopupBtn;

experienceEl.addEventListener("click", (e) => {
  e.preventDefault();
  const clicked = e.target;
  
  
  if (clicked.tagName === "A") {
    if (clicked.dataset.for === "ecommerce") {
      const markup = `
        <div class="popup">
          <div class="popup-content">
            <div class="popup-left">
              <img
                src="assets/E - Commerce.jpg"
                alt="E-Commerce"
                class="popup-img"
              />
            </div>
            <div class="popup-right">
              <span class="popup-close">&times;</span>
              
              <ul class="popup-list">
                
                
              </ul>
              <p class="popup-date">                 Toulouse, France (2020 / 2021)</p>
          </div>
        </div>
      </div>
    `;
      main.insertAdjacentHTML("afterbegin", markup);
    }
    
    
    
    if (clicked.dataset.for === "bluePartie") {
      const markup = `
        <div class="popup">
          <div class="popup-content">
            <div class="popup-left">
              <img src="assets/Flyer.jpg" alt="Flyer" class="popup-img" />
            </div>
            
            <div class="popup-right">
              <span class="popup-close">&times;</span>
              
              <ul class="popup-list">
                
                
              </ul>
              <p class="popup-date">Alger, Algérie (07/2019 - 09/2019)</p>
            </div>
          </div>
        </div>
      `;
      main.insertAdjacentHTML("afterbegin", markup);
    }
    
    
    if (clicked.dataset.for === "oppo") {
      const markup = `
        <div class="popup">
          <div class="popup-content">
            <div class="popup-left">
              <img src="assets/Oppo.jpg" alt="Oppo" class="popup-img" />
            </div>
            <div class="popup-right">
              <span class="popup-close">&times;</span>
              
              <ul class="popup-list">
              
                
              </ul>
              <p class="popup-date">Alger, Algérie (03/2019 - 06/2019)</p>
            </div>
          </div>
        </div>
      `;
      main.insertAdjacentHTML("afterbegin", markup);
    }
    
    
    if (clicked.dataset.for === "sos") {
      const markup = `
        <div class="popup">
          <div class="popup-content">
            <div class="popup-left">
              <img src="assets/SOS.jpg" alt="S.O.S" class="popup-img" />
            </div>
            <div class="popup-right">
              <span class="popup-close">&times;</span>
             
              <ul class="popup-list">
                
              </ul>
              <p class="popup-date">Tunis, Tunisie (06/2018 - 08/2018)</p>
            </div>
          </div>
        </div>
      `;
      main.insertAdjacentHTML("afterbegin", markup);
    }
    const popup = document.querySelector(".popup");
    closePopupBtn = document.querySelector(".popup-close");
    closePopupBtn.addEventListener("click", () => {
      main.removeChild(popup);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        main.removeChild(popup);
      }
    });
  }
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = contactEmail.value;
  const subject = contactSubject.value;
  const body = contactMessage.value;

  const url = `mailto:rayan.cherad@gmail.com?bcc=${email}&subject=${subject}&body=${body}`;
  window.open(url);

  contactEmail.value = "";
  contactSubject.value = "";
  contactMessage.value = "";
});
