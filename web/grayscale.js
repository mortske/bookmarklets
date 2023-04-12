// Makes the webpage grayscale
javascript: (() => {
  const setGreyscale = (i) => {
    document.body.style.filter = i;
    document.body.style.webkitFilter = i;
  };
  if (window.isGrayscale) {
    setGreyscale("none");
    window.isGrayscale = false;
  } else {
    setGreyscale("grayscale(1)");
    window.isGrayscale = true;
  }
})();
