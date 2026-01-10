// 📊 Visitor Counter
let visits = localStorage.getItem("visits");
visits = visits ? Number(visits) + 1 : 1;
localStorage.setItem("visits", visits);

document.getElementById("visitorCount").innerText =
  "Visitors: " + visits;

// 🔐 Admin Logic
const ADMIN_PASSWORD = "pianoAdmin123";

function openAdmin() {
  document.getElementById("adminLogin").classList.toggle("hidden");
}

function adminLogin() {
  const pass = document.getElementById("adminPass").value;
  if (pass === ADMIN_PASSWORD) {
    document.getElementById("adminLogin").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
  } else {
    alert("Wrong password");
  }
}
