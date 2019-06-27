window.onscroll = function() {
  active();
};

const backdrop = document.querySelector(".backdrop");
const sidedrawer = document.querySelector(".sidedrawer");

let link = document.querySelectorAll(".link");

// ACTIVE LINKS
// THERE HAS TO BE A WAY TO SHORTEN THIS UP!!
//////////////////////////////////////////////
let active = () => {
  let homeLink = document.querySelectorAll(".link--home");
  let aboutLink = document.querySelectorAll(".link--about");
  let techLink = document.querySelectorAll(".link--tech");
  let offerLink = document.querySelectorAll(".link--offer");

  let heroPosition = document.querySelector(".section__hero");
  let aboutPosition = document.querySelector(".section__about");
  let techPosition = document.querySelector(".section__tech");
  let offerPosition = document.querySelector(".section__offer");

  const activeHome = () => {
    if (
      document.body.scrollTop >
      heroPosition.getBoundingClientRect().top - 1
    ) {
      homeLink.forEach(e => {
        e.classList.add("active");
      });
    }
    if (
      document.body.scrollTop >
      aboutPosition.getBoundingClientRect().top - 1
    ) {
      homeLink.forEach(e => {
        e.classList.remove("active");
      });
    }
  };
  activeHome();

  const activeAbout = () => {
    if (
      document.body.scrollTop >
      aboutPosition.getBoundingClientRect().top - 1
    ) {
      aboutLink.forEach(e => {
        e.classList.add("active");
      });
    } else {
      aboutLink.forEach(e => {
        e.classList.remove("active");
      });
    }
    if (
      document.body.scrollTop >
      techPosition.getBoundingClientRect().top - 1
    ) {
      aboutLink.forEach(e => {
        e.classList.remove("active");
      });
    }
  };
  activeAbout();

  const activeTech = () => {
    if (
      document.body.scrollTop >
      techPosition.getBoundingClientRect().top - 1
    ) {
      techLink.forEach(e => {
        e.classList.add("active");
      });
    } else {
      techLink.forEach(e => {
        e.classList.remove("active");
      });
    }
    if (
      document.body.scrollTop >
      offerPosition.getBoundingClientRect().top - 1
    ) {
      techLink.forEach(e => {
        e.classList.remove("active");
      });
    }
  };
  activeTech();

  const activeOffer = () => {
    if (
      document.body.scrollTop >
      offerPosition.getBoundingClientRect().top - 1
    ) {
      offerLink.forEach(e => {
        e.classList.add("active");
      });
    } else {
      offerLink.forEach(e => {
        e.classList.remove("active");
      });
    }
    if (
      document.body.scrollTop >
      offersPosition.getBoundingClientRect().top - 1 // Needed change after adding more sections!
    ) {
      offerLink.forEach(e => {
        e.classList.remove("active");
      });
    }
  };
  activeOffer();
};

link.forEach(e => {
  e.addEventListener("click", () => {
    close();
  });
});

const close = () => {
  backdrop.style.animation = "backdrop-out .3s ease-in-out";
  sidedrawer.style.animation = "move-to-left .3s ease-in-out forwards";
};

export default scroll;
