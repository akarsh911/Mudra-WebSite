  document.addEventListener('DOMContentLoaded', function () {
            // Get the current URL, removing any fragment
            var documentUrl = document.location.href.replace(/#.*$/, '')

            // Iterate through all links
            var linkEls = document.getElementsByTagName('A')
            for (var linkIndex = 0; linkIndex < linkEls.length; linkIndex++) {
                var linkEl = linkEls[linkIndex]

                // Ignore links that don't begin with #
                if (!linkEl.getAttribute('href').match(/^#/)) {
                    continue;
                }

                // Convert to an absolute URL
                linkEl.setAttribute('href', documentUrl + linkEl.getAttribute('href'))
            }
        })    
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
  social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
  social_panel_container.classList.remove('visible')
});