const bar = document.querySelector(".bar");
const navItems = document.querySelector(".nav-items");

bar.addEventListener("click", () => {
    navItems.classList.toggle("show");
    const menuIcon = bar.querySelector('i');
    menuIcon.classList.toggle("ri-menu-line"); // Toggle bars icon class
    menuIcon.classList.toggle("ri-close-line");
});
