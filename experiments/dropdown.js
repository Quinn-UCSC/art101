// JavaScript to handle the dropdown functionality
window.addEventListener('DOMContentLoaded', function() {
    var dropdownItems = document.querySelectorAll('.dropdown-menu');
  
    dropdownItems.forEach(function(item) {
      item.parentNode.addEventListener('mouseenter', function() {
        item.style.display = 'block';
      });
  
      item.parentNode.addEventListener('mouseleave', function() {
        item.style.display = 'none';
      });
    });
  });