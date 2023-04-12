// Clears the browser's local and session storage and reloads the page
javascript: (() => {
  sessionStorage.clear();
  localStorage.clear();
  location.reload();
})();
