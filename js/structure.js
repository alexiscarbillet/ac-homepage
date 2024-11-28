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

  // crypto
  const listItems16 = document.querySelectorAll('#crypto-list1 li');
  const count16 = listItems16.length;
  document.getElementById('crypto-count').textContent = count16;

  const listItems17 = document.querySelectorAll('#crypto-list2 li');
  const count17 = listItems17.length;
  document.getElementById('crypto-count2').textContent = count17;

  const listItems18 = document.querySelectorAll('#crypto-list3 li');
  const count18 = listItems18.length;
  document.getElementById('crypto-count3').textContent = count18;

  const listItems19 = document.querySelectorAll('#crypto-list4 li');
  const count19 = listItems19.length;
  document.getElementById('crypto-count4').textContent = count19;

  // cats
  const listItems20 = document.querySelectorAll('#cats-list1 li');
  const count20 = listItems20.length;
  document.getElementById('cats-count').textContent = count20;

  const listItems21 = document.querySelectorAll('#cats-list2 li');
  const count21 = listItems21.length;
  document.getElementById('cats-count2').textContent = count21;

  const listItems22 = document.querySelectorAll('#cats-list3 li');
  const count22 = listItems22.length;
  document.getElementById('cats-count3').textContent = count22;

  const listItems23 = document.querySelectorAll('#cats-list4 li');
  const count23 = listItems22.length;
  document.getElementById('cats-count4').textContent = count23;

  // electricity
  const listItems24 = document.querySelectorAll('#ec-list1 li');
  const count24 = listItems24.length;
  document.getElementById('ec-count').textContent = count24;

  const listItems25 = document.querySelectorAll('#ec-list3 li');
  const count25 = listItems25.length;
  document.getElementById('ec-count2').textContent = count25;

  const listItems26 = document.querySelectorAll('#ec-list4 li');
  const count26 = listItems26.length;
  document.getElementById('ec-count3').textContent = count26;

  const listItems27 = document.querySelectorAll('#ec-list5 li');
  const count27 = listItems27.length;
  document.getElementById('ec-count4').textContent = count27;

  const listItems28 = document.querySelectorAll('#ec-list6 li');
  const count28 = listItems28.length;
  document.getElementById('ec-count5').textContent = count28;

  const listItems29 = document.querySelectorAll('#ec-list15 li');
  const count29 = listItems29.length;
  document.getElementById('ec-count6').textContent = count29;

  const listItems30 = document.querySelectorAll('#ec-list7 li');
  const count30 = listItems30.length;
  document.getElementById('ec-count7').textContent = count30;

  const listItems31 = document.querySelectorAll('#ec-list8 li');
  const count31 = listItems31.length;
  document.getElementById('ec-count8').textContent = count31;

  const listItems32 = document.querySelectorAll('#ec-list9 li');
  const count32 = listItems32.length;
  document.getElementById('ec-count9').textContent = count32;

  const listItems33 = document.querySelectorAll('#ec-list10 li');
  const count33 = listItems33.length;
  document.getElementById('ec-count10').textContent = count33;

  const listItems34 = document.querySelectorAll('#ec-list11 li');
  const count34 = listItems34.length;
  document.getElementById('ec-count11').textContent = count34;

  const listItems35 = document.querySelectorAll('#ec-list12 li');
  const count35 = listItems35.length;
  document.getElementById('ec-count12').textContent = count35;

  const listItems36 = document.querySelectorAll('#ec-list13 li');
  const count36 = listItems36.length;
  document.getElementById('ec-count13').textContent = count36;

  const listItems37 = document.querySelectorAll('#ec-list14 li');
  const count37 = listItems37.length;
  document.getElementById('ec-count14').textContent = count37;

  // Linux
  const listItems38 = document.querySelectorAll('#linux-list li');
  const count38 = listItems38.length;
  document.getElementById('linux-count').textContent = count38;

  // Puppet
  const listItems39 = document.querySelectorAll('#puppet-list li');
  const count39 = listItems39.length;
  document.getElementById('puppet-count').textContent = count39;

  // Kube
  const listItems40 = document.querySelectorAll('#kube-list li');
  const count40 = listItems40.length;
  document.getElementById('kube-count').textContent = count40;

  // Docker
  const listItems41 = document.querySelectorAll('#docker-list1 li');
  const count41 = listItems41.length;
  document.getElementById('docker-count1').textContent = count41;

  const listItems42 = document.querySelectorAll('#docker-list2 li');
  const count42 = listItems42.length;
  document.getElementById('docker-count2').textContent = count42;

  const listItems43 = document.querySelectorAll('#docker-list3 li');
  const count43 = listItems43.length;
  document.getElementById('docker-count3').textContent = count43;

  const listItems44 = document.querySelectorAll('#docker-list4 li');
  const count44 = listItems44.length;
  document.getElementById('docker-count4').textContent = count44;

  const listItems45 = document.querySelectorAll('#docker-list5 li');
  const count45 = listItems45.length;
  document.getElementById('docker-count5').textContent = count45;

  const listItems46 = document.querySelectorAll('#docker-list6 li');
  const count46 = listItems46.length;
  document.getElementById('docker-count6').textContent = count46;

  const listItems47 = document.querySelectorAll('#docker-list7 li');
  const count47 = listItems47.length;
  document.getElementById('docker-count7').textContent = count47;

  const listItems48 = document.querySelectorAll('#docker-list8 li');
  const count48 = listItems48.length;
  document.getElementById('docker-count8').textContent = count48;

  // spark
  const listItems49 = document.querySelectorAll('#spark-list li');
  const count49 = listItems49.length;
  document.getElementById('spark-count').textContent = count49;

  // mongo
  const listItems50 = document.querySelectorAll('#mongo-list li');
  const count50 = listItems50.length;
  document.getElementById('mongo-count').textContent = count50;

  // sql
  const listItems51 = document.querySelectorAll('#sql-list li');
  const count51 = listItems51.length;
  document.getElementById('sql-count').textContent = count51;

  // prom

  // AI

  // Data Viz

  // Reco
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

  const cats1Count = document.getElementById('cats-count');
  const cats2Count = document.getElementById('cats-count2');
  const cats3Count = document.getElementById('cats-count3');
  const cats4Count = document.getElementById('cats-count4');

  const totalArticles3 = parseInt(cats1Count.textContent) + parseInt(cats2Count.textContent) + parseInt(cats3Count.textContent) + parseInt(cats4Count.textContent);
  document.getElementById('cats-total-count').textContent = totalArticles3;

  const ec2Count = document.getElementById('ec-count2');
  const ec3Count = document.getElementById('ec-count3');
  const ec4Count = document.getElementById('ec-count4');

  const ec1Count = document.getElementById('ec-count');
  const ec5Count = document.getElementById('ec-count5');
  const ec6Count = document.getElementById('ec-count6');
  const ec7Count = document.getElementById('ec-count7');
  const ec8Count = document.getElementById('ec-count8');
  const ec9Count = document.getElementById('ec-count9');
  const ec10Count = document.getElementById('ec-count10');
  const ec11Count = document.getElementById('ec-count11');
  const ec12Count = document.getElementById('ec-count12');
  const ec13Count = document.getElementById('ec-count13');
  const ec14Count = document.getElementById('ec-count14');
  const ec15Count = document.getElementById('ec-count15');

  const totalArticles4 = 2 + parseInt(ec2Count.textContent) + parseInt(ec3Count.textContent) + parseInt(ec4Count.textContent);
  document.getElementById('ec-conductors').textContent = totalArticles4;

  const totalArticles5 = 1 + totalArticles4 + parseInt(ec1Count.textContent) + parseInt(ec5Count.textContent) + parseInt(ec6Count.textContent) + parseInt(ec7Count.textContent) + parseInt(ec8Count.textContent) + parseInt(ec9Count.textContent) + parseInt(ec10Count.textContent) + parseInt(ec11Count.textContent) + parseInt(ec12Count.textContent) + parseInt(ec13Count.textContent) + parseInt(ec14Count.textContent);
  document.getElementById('ec-total-count').textContent = totalArticles5;

  const docker1Count = document.getElementById('docker-count1');
  const docker2Count = document.getElementById('docker-count2');
  const docker3Count = document.getElementById('docker-count3');
  const docker4Count = document.getElementById('docker-count4');
  const docker5Count = document.getElementById('docker-count5');
  const docker6Count = document.getElementById('docker-count6');
  const docker7Count = document.getElementById('docker-count7');
  const docker8Count = document.getElementById('docker-count8');

  const totalArticles6 = parseInt(docker1Count.textContent) + parseInt(docker2Count.textContent) + parseInt(docker3Count.textContent) + parseInt(docker4Count.textContent) + parseInt(docker5Count.textContent) + parseInt(docker6Count.textContent) + parseInt(docker7Count.textContent) + parseInt(docker8Count.textContent);
  document.getElementById('docker-total-count').textContent = totalArticles6;

  const kubeCount = document.getElementById('kube-count');
  const puppetCount = document.getElementById('puppet-count');
  const linuxCount = document.getElementById('linux-count');

  const totalArticles7 = totalArticles6 + parseInt(kubeCount.textContent) + parseInt(bashCount.textContent) + parseInt(linuxCount.textContent);
  document.getElementById('sysadmin-total-count').textContent = totalArticles7;

}

// Call the function on page load to set the initial counts
updateTotalArticleCount();