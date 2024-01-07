function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}







document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("autoTypingText");
  const textsToType = [
      "Computer Science Student",
      "Frontend Developer",
      "Full Stack Developer",
      "Cyber Security Enthusiast"
      // Add more text as needed
  ];

  let textIndex = 0;
  let charIndex = 0;

  function type() {
      textElement.textContent = textsToType[textIndex].slice(0, charIndex);
      charIndex++;

      if (charIndex > textsToType[textIndex].length) {
          charIndex = 0;
          textIndex++;

          if (textIndex >= textsToType.length) {
              textIndex = 0; // Restart the cycle
          }
      }
  }

  setInterval(type, 250); // Adjust the interval for typing speed
});
