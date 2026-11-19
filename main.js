var carCount = 0;

function showMessage(text, type) {
  var icon = "fa-circle-check";
  if (type === "error") {
    icon = "fa-circle-exclamation";
  }
  var note = document.createElement("div");
  note.className = "note " + type;
  note.innerHTML = '<i class="fa-solid ' + icon + '"></i><span>' + text + '</span><button onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>';
  document.getElementById("notes").appendChild(note);
  setTimeout(function () {
    note.remove();
  }, 3500);
}

function toggleMenu(id) {
  document.getElementById(id).classList.toggle("open");
}

function filterCars(type) {
  var cards = document.querySelectorAll(".car-card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
    if (type === "all" || cards[i].getAttribute("data-type") === type) {
      cards[i].style.display = "";
    }
  }
}

function updateCount() {
  document.getElementById("carCount").textContent = carCount;
  document.getElementById("carTotal").textContent = carCount + " ta";
}

function addCar(button) {
  carCount = carCount + 1;
  updateCount();
  showMessage(button.getAttribute("data-name") + " tanlovga qo'shildi", "success");
}

function sendRequest() {
  if (carCount === 0) {
    showMessage("Avval avtomobil tanlang", "error");
    return;
  }
  carCount = 0;
  updateCount();
  toggleMenu("cart");
  showMessage("So'rovingiz yuborildi, menejer bog'lanadi", "success");
}

var loadTime = 5000 + Math.floor(Math.random() * 3001);
document.getElementById("barFill").style.animationDuration = loadTime + "ms";
document.body.classList.add("locked");
setTimeout(function () {
  document.getElementById("loader").classList.add("hidden");
  document.body.classList.remove("locked");
}, loadTime);

document.addEventListener("error", function (event) {
  if (event.target.tagName === "IMG") {
    event.target.style.visibility = "hidden";
    event.target.parentElement.classList.add("no-image");
  }
}, true);