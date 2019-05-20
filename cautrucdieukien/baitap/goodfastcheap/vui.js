document.querySelector('body').className = 'has-js';
    var checked = [];
    [].forEach.call(document.querySelectorAll('input[type="checkbox"]'), function (checkbox) {
      checkbox.addEventListener('change', function (e) {
        ga('send', 'event', 'checkbox', 'trigger');
        if (checkbox.checked && checked.length === 2) {
          var uncheckTarget = checked[Math.floor(Math.random() * checked.length)];
          uncheckTarget.checked = false;
        }
        checked = document.querySelectorAll('input[type="checkbox"]:checked');
      });
    });

    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-91249744-1', 'auto');
    ga('send', 'pageview');