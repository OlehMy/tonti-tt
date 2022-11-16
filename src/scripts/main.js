'use strict';

const pages = document.querySelectorAll('.page__plan');
const links = document.querySelectorAll('.about__link');

pages[1].hidden = true;

const handleClick = (event, currentLink) => {
  event.preventDefault();

  links.forEach(link => {
    if (currentLink.href !== window.document.URL) {
      link.classList.toggle('about__link--active');
    }
  });

  window.history.pushState({}, '', event.target.href);

  pages.forEach(page => {
    const match = page.dataset.match;

    page.hidden = window.location.pathname !== match;
  });
};

const createLinks = () => {
  links.forEach(link => {
    link.addEventListener('click', (event) => handleClick(event, link));
  });
};

createLinks();
