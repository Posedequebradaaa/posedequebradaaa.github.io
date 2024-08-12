(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
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
    target: '#sideNav'
  });

})(jQuery); // End of use strict

document.addEventListener('DOMContentLoaded', () => {
  function initializeProgressBar(barId, textId, targetPercentage, color) {
    const progressBar = document.getElementById(barId);
    const progressText = document.getElementById(textId);
    let progress = 0;

    function updateProgress() {
      if (progress <= targetPercentage) {
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;

        // Cor baseada na porcentagem
        if (progress <= 5) {
          const percentage = progress / 35;
          const r = Math.floor(255 - (255 - 255) * percentage);
          const g = Math.floor(0 + (165 - 0) * percentage);
          const b = Math.floor(255);
          progressBar.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        } else if (progress <= 70) {
          progressBar.style.backgroundColor = color;
        }

        progress++;
        setTimeout(updateProgress, 20);
      } else {
        setTimeout(() => {
          progress = 0;
          updateProgress();
        }, 3000);
      }
    }

    updateProgress();
  }

  initializeProgressBar('progress-bar-ceh', 'progress-text-ceh', 60, 'royalblue');
  initializeProgressBar('progress-bar-cisco', 'progress-text-cisco', 90, 'red');
  initializeProgressBar('progress-bar-CCST-CY', 'progress-bar-CCST-CY', 90, 'red');
  initializeProgressBar('progress-bar-CCST-CNT', 'progress-bar-CCST-CNT', 90, 'red');
  initializeProgressBar('progress-bar-cin', 'progress-bar-cin', 100, 'forestgreen');
  initializeProgressBar('progress-bar-ech', 'progress-bar-ech', 100, 'forestgreen');
  initializeProgressBar('progress-bar-solyd', 'progress-bar-solyd', 100, 'forestgreen');
  initializeProgressBar('progress-bar-uceh', 'progress-bar-uceh', 100, 'forestgreen');
  initializeProgressBar('progress-bar-soc', 'progress-bar-soc', 100, 'forestgreen');
  initializeProgressBar('progress-bar-siem', 'progress-bar-siem', 100, 'forestgreen');
  initializeProgressBar('progress-bar-iso', 'progress-bar-iso', 100, 'forestgreen');
  initializeProgressBar('progress-bar-wire', 'progress-bar-wire', 100, 'forestgreen');
  initializeProgressBar('progress-bar-net', 'progress-bar-net', 100, 'forestgreen');
  initializeProgressBar('progress-bar-adm', 'progress-bar-adm', 100, 'forestgreen');
  initializeProgressBar('progress-bar-arq', 'progress-bar-arq', 100, 'forestgreen');
  initializeProgressBar('progress-bar-fire', 'progress-bar-fire', 100, 'forestgreen');
  initializeProgressBar('progress-bar-pf', 'progress-bar-pf', 100, 'forestgreen');
  initializeProgressBar('progress-bar-for', 'progress-bar-for', 100, 'forestgreen');
  initializeProgressBar('progress-bar-eng', 'progress-bar-eng', 10, 'deepskyblue');
  initializeProgressBar('progress-bar-ana', 'progress-bar-ana', 100, 'forestgreen');
  initializeProgressBar('progress-bar-tec', 'progress-bar-tec', 100, 'forestgreen');
  initializeProgressBar('progress-text-lp1', 'progress-text-lp1', 70, 'gold');
});
