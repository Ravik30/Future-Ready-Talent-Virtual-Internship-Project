document.addEventListener("DOMContentLoaded", () => {
    const chatIcon = document.getElementById("chat-icon");
    const chatBotContainer = document.getElementById("chat-bot-container");
  
    chatIcon.addEventListener("click", () => {
      chatBotContainer.classList.toggle("visible");
    });
  });
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav__links');

    menuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});
  
    