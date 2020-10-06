//Shrink Nav Links using mouseenter/mouseout

const slidingNav = document.querySelectorAll(".nav-link").forEach((e) => {
  e.addEventListener("mouseenter", () => {
    e.style.transform = "scale(0.8)";
  });
  e.addEventListener("mouseout", () => {
    e.style.transform = "scale(1)";
  });
});

//Logo color change on click with revert to black after 1.5s
const logoColorChange = document.querySelector(".logo-heading");
logoColorChange.addEventListener("click", () => {
  logoColorChange.style.color = "red";
  window.setTimeout(() => {
    logoColorChange.style.color = "black";
  }, 1500);
});

//image zoom on mouse down
const imageZoom = document.querySelectorAll(".img-content").forEach((e) => {
  e.addEventListener("mousedown", () => {
    e.style.transform = "scale(1.5)";
    e.style.transition = ".5s ease";
  });
  e.addEventListener("mouseup", () => {
    e.style.transform = "scale(1)";
    e.style.transition = ".5s ease";
  });
});
