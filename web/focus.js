// Logs the focused element every time it changes
javascript: (() => {
  if (window._activeElInterval) {
    clearInterval(window._activeElInterval);
    delete window._activeElInterval;
  } else {
    var activeEl;
    window._activeElInterval = setInterval(function () {
      var currentActiveEl = document.activeElement;
      if (currentActiveEl !== activeEl) {
        activeEl = currentActiveEl;
        console.log(activeEl);
      }
    }, 200);
  }
})();
