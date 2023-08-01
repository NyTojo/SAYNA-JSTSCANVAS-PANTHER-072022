document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll(
    "#perssonage h1, #perssonage p,#perssonage h2, #article h2, #article p, #carte-identité img"
  );

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateElements() {
    elementsToAnimate.forEach(function (element) {
      if (isInViewport(element)) {
        element.style.opacity = "1";
        element.style.transform = "translateX(0)";
      }
    });
  }

  animateElements();

  window.addEventListener("scroll", animateElements);
});