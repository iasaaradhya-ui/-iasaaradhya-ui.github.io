// 📊 Visitor counter
let visits = localStorage.getItem("visits");
visits = visits ? Number(visits) + 1 : 1;
localStorage.setItem("visits", visits);

const vc = document.getElementById("visitorCount");
if (vc) vc.innerText = "Visitors: " + visits;

// 🔐
// 📊 Visitor counter
let visits = localStorage.getItem("visits");
visits = visits ? Number(visits) + 1 : 1;
localStorage.setItem("visits", visits);

const vc = document.getElementById("visitorCount");
if (vc) vc.innerText = "Visitors: " + visits;

// 🔐
