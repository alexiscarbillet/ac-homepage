(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict

function Lien() {
	i = document.Choix.Liste.selectedIndex;
	if (i == 0) return;
	url = document.Choix.Liste.options[i].value;
	parent.location.href = url;
}

function toggleVisibility(listId) {
  const list = document.getElementById(listId);
  if (list) {
      // Toggle the 'hidden' class
      list.classList.toggle('hidden');
  }
}

function updateAppCount() {
  const listItems = document.querySelectorAll('#android-list li');
  const count = listItems.length;
  document.getElementById('app-count').textContent = count;

  const listItems2 = document.querySelectorAll('#firefox-list li');
  const count2 = listItems2.length;
  document.getElementById('firefox-count').textContent = count2;

  const listItems3 = document.querySelectorAll('#website-list li');
  const count3 = listItems3.length;
  document.getElementById('website-count').textContent = count3;

  // Python part
  const listItems4 = document.querySelectorAll('#python-list1 li');
  const count4 = listItems4.length;
  document.getElementById('python1-count').textContent = count4;

  const listItems5 = document.querySelectorAll('#python-list2 li');
  const count5 = listItems5.length;
  document.getElementById('python2-count').textContent = count5;

  const listItems6 = document.querySelectorAll('#python-list3 li');
  const count6 = listItems6.length;
  document.getElementById('python3-count').textContent = count6;

  const listItems7 = document.querySelectorAll('#python-list4 li');
  const count7 = listItems7.length;
  document.getElementById('python4-count').textContent = count7;

  const listItems8 = document.querySelectorAll('#python-list5 li');
  const count8 = listItems8.length;
  document.getElementById('python5-count').textContent = count8;

  const listItems9 = document.querySelectorAll('#python-list6 li');
  const count9 = listItems9.length;
  document.getElementById('python6-count').textContent = count9;

  const listItems10 = document.querySelectorAll('#python-list7 li');
  const count10 = listItems10.length;
  document.getElementById('python7-count').textContent = count10;

  const listItems11 = document.querySelectorAll('#python-list8 li');
  const count11 = listItems11.length;
  document.getElementById('python8-count').textContent = count11;

  // html
  const listItems12 = document.querySelectorAll('#html-list li');
  const count12 = listItems12.length;
  document.getElementById('html-count').textContent = count12;

  //bash
  const listItems13 = document.querySelectorAll('#bash-list li');
  const count13 = listItems13.length;
  document.getElementById('bash-count').textContent = count13;

  //go
  const listItems14 = document.querySelectorAll('#go-list li');
  const count14 = listItems14.length;
  document.getElementById('go-count').textContent = count14;

  //android
  const listItems15 = document.querySelectorAll('#android2-list li');
  const count15 = listItems15.length;
  document.getElementById('android-count2').textContent = count15;
}

// Call the function on page load to set the initial count
updateAppCount();

// Function to update the total article count
function updateTotalArticleCount() {
  const python1Count = document.getElementById('python1-count');
  const python2Count = document.getElementById('python2-count');
  const python3Count = document.getElementById('python3-count');
  const python4Count = document.getElementById('python4-count');
  const python5Count = document.getElementById('python5-count');
  const python6Count = document.getElementById('python6-count');
  const python7Count = document.getElementById('python7-count');
  const python8Count = document.getElementById('python8-count');

  // Get the total count and update the total articles span
  const totalArticles = parseInt(python1Count.textContent) + parseInt(python2Count.textContent) + parseInt(python3Count.textContent) + parseInt(python4Count.textContent) + parseInt(python5Count.textContent) + parseInt(python6Count.textContent) + parseInt(python7Count.textContent) + + parseInt(python8Count.textContent);
  document.getElementById('python-total-count').textContent = totalArticles;

  const htmlCount = document.getElementById('html-count');
  const bashCount = document.getElementById('bash-count');
  const goCount = document.getElementById('go-count');

  const totalArticles2 = totalArticles + parseInt(htmlCount.textContent) + parseInt(bashCount.textContent) + parseInt(goCount.textContent);
  document.getElementById('coding-total-count').textContent = totalArticles2;
}

// Call the function on page load to set the initial counts
updateTotalArticleCount();