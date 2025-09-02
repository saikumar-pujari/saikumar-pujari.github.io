function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const nameElement = document.querySelector(".title");
const fullName = nameElement.textContent; // "Saikumar"
nameElement.textContent = ""; // start empty
let i = 0;

function typeName() {
  if (i < fullName.length) {
    nameElement.textContent += fullName.charAt(i);
    i++;
    setTimeout(typeName, 250); // speed of typing
  }
}

window.onload = typeName; // start typing when page loads

  document.addEventListener("contextmenu", function(e) {
      e.preventDefault();
      alert("Hey! Nice try 😎. The source code is protected.");
    });

    //  keyboard shortcuts to discourage copy-pasting code
    document.addEventListener("keydown", function(e) {
      if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'c')) {
        e.preventDefault();
        alert("Oops! Code copying is disabled 😎");
      }
    });


     document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.querySelector("#myName");

    nameElement.addEventListener("click", () => {
      document.addEventListener("mousemove", spawnStarTrail);

      // Stop after 3s
      setTimeout(() => {
        document.removeEventListener("mousemove", spawnStarTrail);
      }, 3000);
    });

    function spawnStarTrail(e) {
      const star = document.createElement("span");
      star.textContent = "✨"+"😉";
      star.style.position = "fixed";
      star.style.left = e.pageX + "px";
      star.style.top = e.pageY + "px";
      star.style.pointerEvents = "none";
      star.style.fontSize = "20px";
      star.style.zIndex = "9999";
      star.style.animation = "floatUp 1s forwards";
      document.body.appendChild(star);

      setTimeout(() => star.remove(), 1000);
    }
  });


   document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.querySelector("#my-baby");

    nameElement.addEventListener("click", () => {
      document.addEventListener("mousemove", spawnStarTrail);

      // Stop after 3s
      setTimeout(() => {
        document.removeEventListener("mousemove", spawnStarTrail);
      }, 3000);
    });

    function spawnStarTrail(e) {
      const star = document.createElement("span");
      star.textContent = "🚀🚀";
      star.style.position = "fixed";
      star.style.left = e.pageX + "px";
      star.style.top = e.pageY + "px";
      star.style.pointerEvents = "none";
      star.style.fontSize = "20px";
      star.style.zIndex = "9999";
      star.style.animation = "floatUp 1s forwards";
      document.body.appendChild(star);

      setTimeout(() => star.remove(), 1000);
    }
  });

  