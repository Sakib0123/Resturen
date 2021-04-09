const nav = document.querySelector('.nav');
const navBg = document.querySelector('.nav-bg');
const gallery = document.querySelector('.gallery');
const spinner = document.querySelector('.spinner');

/////////// nav list hover effect //////////////

const HandleHoverOnNav = function (e) {
  if (e.target.classList.contains('nav-link')) {
    const siblings = e.target
      .closest('.nav-list')
      .querySelectorAll('.nav-link');
    siblings.forEach(el => {
      if (el !== e.target) {
        el.style.opacity = this;
        el.style.transitionDuration = '0.3s';
      }
    });
  }
};

nav.addEventListener('mouseover', HandleHoverOnNav.bind(0.5));

nav.addEventListener('mouseout', HandleHoverOnNav.bind(1));

/////////////// Pre-loader /////////

window.addEventListener('load', e => {
  spinner.style.display = 'none';
});

///////////////// sticky navbar ///////////

const coords = gallery.getBoundingClientRect();

window.addEventListener('scroll', () => {
  if (window.scrollY > coords.top) navBg.classList.add('sticky');
  else navBg.classList.remove('sticky');
});
