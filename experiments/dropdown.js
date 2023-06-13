window.addEventListener('DOMContentLoaded', function() {
  var dropdownItems = document.querySelectorAll('.dropdown-menu');

  dropdownItems.forEach(function(item) {
    item.parentNode.addEventListener('mouseenter', function() {
      item.style.display = 'block';
    });

    item.parentNode.addEventListener('mouseleave', function() {
      // Check if the mouse is still hovering over the dropdown menu
      var isHovered = isMouseHovering(item);

      if (!isHovered) {
        item.style.display = 'none';
      }
    });
  });

  function isMouseHovering(element) {
    var rect = element.getBoundingClientRect();
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    return (
      mouseX >= rect.left &&
      mouseX <= rect.right &&
      mouseY >= rect.top &&
      mouseY <= rect.bottom
    );
  }
});
