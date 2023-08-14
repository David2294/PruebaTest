document.addEventListener('DOMContentLoaded', function() {
    var lins = document.querySelectorAll('ul a');
    var divs = document.querySelectorAll('section .contenidos');

    for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = "none";
    }

    for (var i = 0; i < lins.length; i++) {
      lins[i].addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').slice(1);
        showDiv(targetId);
      });
    }

    function showDiv(divId) {
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
      }

      var div = document.getElementById(divId);
      div.style.display = "block";
    }
  });