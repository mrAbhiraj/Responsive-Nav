const bar = document.querySelector(".bar");
const navItems = document.querySelector(".nav-items");

const item = document.querySelectorAll(".nav-items h3");
item.forEach(function (page) {
  page.addEventListener("click", function (event) {
    console.log(event.target.tagName);

    if (event.target.tagName === "A") {
      // Get the target section ID from the href attribute
      const targetSectionId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetSectionId);

      // Close the navbar
      navItems.classList.remove("show");
      bar.classList.remove("show");

      const menuIcon = bar.querySelector("i");
      
      menuIcon.classList.toggle("ri-menu-line"); // Toggle bars icon class
      menuIcon.classList.toggle("ri-close-line");
      
      // Scroll to the target section
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Prevent the default anchor link behavior
      event.preventDefault();
    }
  });
});

bar.addEventListener("click", () => {
  navItems.classList.toggle("show");
  const menuIcon = bar.querySelector("i");
  menuIcon.classList.toggle("ri-menu-line"); // Toggle bars icon class
  menuIcon.classList.toggle("ri-close-line");
});
