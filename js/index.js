function showPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function hidePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

function togglePopup(id) {
  const popup = document.getElementById(id);
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  addPopupListeners("OpenRisk", "CloseRisk", "OKRisk");
  addPopupListeners("OpenChunkz", "CloseChunkz", "OKChunkz");
  addPopupListeners("OpenSrc", "CloseSrc", "OKSrc");

  addPopupListeners("OpenFolder", "CloseFolder", "OKFolder"); // Openable folder NOT an alias
});

function addPopupListeners(popupId, closeBtnClass, okBtnClass) {
  document
    .querySelector(`#${popupId} .${closeBtnClass}`)
    .addEventListener("click", function () {
      hidePopup(popupId);
    });
  document
    .querySelector(`#${popupId} .${okBtnClass}`)
    .addEventListener("click", function () {
      hidePopup(popupId);
    });
}

let date = new Date();

setInterval(function(){
    document.querySelector('.time').innerText = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
  let audio = document.getElementById("audio");
  let range = document.getElementById("range26");
  range.addEventListener("input", function() {
    audio.volume = range.value / 50;
  });
});

if (window.matchMedia("(max-width: 767px)").matches) {
  console.log("This is a mobile device, the code will not run. Try on pc!");
} else {
  document.addEventListener("DOMContentLoaded", function() {
    let startButton = document.querySelector('.start-button');
    let startMenu = document.querySelector('.start-menu');

    startButton.addEventListener('click', function() {
      toggleStartMenu();
    });
  });
}

function toggleStartMenu() {
  const startMenu = document.querySelector('.start-menu');
  if (startMenu.style.display === "block") {
    startMenu.style.display = "none";
  } else {
    startMenu.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  $(document).ready(function(){
    $('.window-action-button.main').click(function(){
      $('#enter').hide();
      $('#main').show();
      $('#audio')[0].play();
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    document.getElementById("mobile-notice").innerHTML = "(View on PC for a better experience)";
  }
});
