const toggleButton = document.querySelector(".toggle1 img");
const sidebar = document.querySelector(".sidebar");
const darkMode = document.querySelector(".dark-mode img");

toggleButton.addEventListener("click", function () {
  sidebar.classList.toggle("collapsed");
  toggleButton.classList.toggle("active");
});

darkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-color");
  if (document.body.classList.contains("dark-color")) {
    darkMode.src = "/images/sun.png";
    sidebar.classList.add("dark-color");
  } else {
    darkMode.src = "/images/moon.png";
    sidebar.classList.remove("dark-color");
  }
});
