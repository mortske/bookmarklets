// If you are the group leader of private tagpro game, this script will select a random double center flag map, randomize the team, and set the region to Europe.
javascript: (() => {
  const maps = ["Callsign", "Double Gubbles", "Juketown", "Leningrad"];
  const randomMap = maps[Math.floor(Math.random() * maps.length)];
  const map = document.getElementsByName("map")[1];
  if (
    ("tagpro.koalabeast.com" !== window.location.host &&
      !window.location.pathname.includes("groups")) ||
    !map
  ) {
    alert("You must the leader of a tagpro game to use this script.");
    return;
  }

  Array.from(map.options).find((e) => e.text === randomMap).selected = true;
  map.dispatchEvent(new Event("change"));
  document.getElementById("randomTeams-btn").click();
  document
    .querySelector(".js-region-setting")
    .closest(".js-leader-only")
    .querySelectorAll(".js-region-setting")
    .forEach((e) => {
      "Europe" !== e.value && !0 === e.checked && e.click();
    });
})();
