const content = document.querySelector('[data-shrink="yes"');

setInterval(function() {
 content.classList.toggle('shrink')
},5000)