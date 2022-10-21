// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const containerDeLinks = document.querySelector(".links-container");
const links = document.querySelector(".links");
const botonParaToggle = document.querySelector(".nav-toggle");
botonParaToggle.addEventListener("click", function () {
  // containerDeLinks.classList.toggle('show-links');  esta seria una opcion
  const containerAltura = containerDeLinks.getBoundingClientRect().height;
  const linksAltura = links.getBoundingClientRect().height;
  if (containerAltura === 0) {
    containerDeLinks.style.height = `${linksAltura}px`;
  } else {
    containerDeLinks.style.height = 0;
  }
});
// ********** fixed navbar y top link************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 600) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default
    e.preventDefault();
    // navigate to specific target
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate height
    const navHeight = navbar.getBoundingClientRect().height;
    const containerAltura = containerDeLinks.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-navbar");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerAltura;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    containerDeLinks.style.height = 0;
  });
});
