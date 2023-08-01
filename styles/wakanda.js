document.addEventListener('mousemove', function (event) {
    var imageSuiveuse = document.getElementById('image-suiveuse');
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var scrollX = window.scrollX;
    var scrollY = window.scrollY;
  
    imageSuiveuse.style.left = mouseX + scrollX + 'px';
    imageSuiveuse.style.top = mouseY + scrollY + 'px';
  });


  document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(
      "h1,p,h2,.content1 img"
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