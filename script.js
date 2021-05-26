const headingEl = document.querySelector(".heading-primary-main");
const headingCursor = document.querySelector(".heading-cursor");
let headingText = headingEl.textContent;
const headingTextLength = headingText.length;
const newText = "Rayan Cherad.";

// init
window.addEventListener("load", () => {
  if (screen.width < 1088)
    document.body.innerHTML =
      "<h1>Cannot Open the website on mobile screen!<h1>";
});

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

const logoBox = document.querySelector(".logo-box");
const logo = document.querySelector(".logo");
const logoName = document.querySelector(".logo-name");

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

const header = document.getElementById("header");

const stickyNav = (entries) => {
  const [entry] = entries;
  console.log(entry);
  const nav = `
    <nav class="clearfix" id="nav">
      <a href="/">
        <div class="logo-container">
          <img src="assets/logo3.png" alt="Ryan Cherad" class="nav-logo" />
          <span
            class="nav__logo-name logo-name__start-animate logo-name__hidden"
            >Ryan Cherad</span
          >
        </div>
      </a>
      <div class="links-container">
        <ul class="navigation">
          <li><a href="#header">Accueil</a></li>
          <li><a href="#about">A propos</a></li>
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

/* <nav class="clearfix">
      <a href="/">
        <div class="logo-container">
          <img src="assets/logo3.png" alt="Ryan Cherad" class="nav-logo" />
          <span
            class="nav__logo-name logo-name__start-animate logo-name__hidden"
            >Ryan Cherad</span
          >
        </div>
      </a>
      <div class="links-container">
        <ul class="navigation">
          <li>Accueil</li>
          <li>A propos</li>
          <li>Expériences</li>
          <li>Contact</li>
          <a href="#" class="small-btn btn-outline-black">Savoir plus</a>
        </ul>
      </div>
      <hr class="container-end" />
    </nav> */
