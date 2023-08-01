document.addEventListener('mousemove', function (event) {
    var imageSuiveuse = document.getElementById('image-suiveuse');
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var scrollX = window.scrollX;
    var scrollY = window.scrollY;
  
    imageSuiveuse.style.left = mouseX + scrollX + 'px';
    imageSuiveuse.style.top = mouseY + scrollY + 'px';
  });