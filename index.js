const expanded_nav = document.querySelector("nav.header__nav :nth-child(2)");
const collapsed_nav = document.querySelector("nav.header__nav :nth-child(1)");
const menu_container = document.querySelector(".menu-container");
const section_1_img_paceholder = document.querySelector(".section-1__img img");
const section_2_img_placeholders = document.querySelectorAll(
  ".section-2__placeholder-img"
);
const outline_button = document.querySelector(".btn.btn--outline");

function setNavVisibility() {
  const clientWidth = document.documentElement.clientWidth;
  if (clientWidth > 980) {
    if (!collapsed_nav.classList.contains("header__slide-nav--hide"))
      collapsed_nav.classList.add("header__slide-nav--hide");
    if (expanded_nav.classList.contains("header__expanded-nav--hide"))
      expanded_nav.classList.remove("header__expanded-nav--hide");
    section_1_img_paceholder.src = "./images/desktop/image-interactive.jpg";
    if (!outline_button.classList.contains("btn--outline-hide"))
      outline_button.classList.add("btn--outline-hide");
  } else {
    if (collapsed_nav.classList.contains("header__slide-nav--hide"))
      collapsed_nav.classList.remove("header__slide-nav--hide");
    if (!expanded_nav.classList.contains("header__expanded-nav--hide"))
      expanded_nav.classList.add("header__expanded-nav--hide");
    section_1_img_paceholder.src = "./images/mobile/image-interactive.jpg";
    if (outline_button.classList.contains("btn--outline-hide"))
      outline_button.classList.remove("btn--outline-hide");
  }
}

function adjustImage() {
  const clientWidth = document.documentElement.clientWidth;
  if (clientWidth > 980) {
    section_1_img_paceholder.src = "./images/desktop/image-interactive.jpg";
  } else {
    section_1_img_paceholder.src = "./images/mobile/image-interactive.jpg";
    if (clientWidth <= 645) {
      section_2_img_placeholders.forEach((img) => {
        img.src = "./images/mobile/image-deep-earth.jpg";
      });
    }
  }
}

setNavVisibility();
adjustImage();

window.addEventListener("resize", () => {
  setNavVisibility();
  adjustImage();
});

collapsed_nav.addEventListener("click", (e) => {
  if (e.target.classList.contains("header__slide-nav--rotate")) {
    e.target.classList.remove("header__slide-nav--rotate");
    if (!menu_container.classList.contains("menu-container--hide"))
      menu_container.classList.add("menu-container--hide");
  } else {
    e.target.classList.add("header__slide-nav--rotate");
    if (menu_container.classList.contains("menu-container--hide"))
      menu_container.classList.remove("menu-container--hide");
  }
});
