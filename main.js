import "./src/tailwind.css";
const stikyBarBtn = document.querySelector("#sticky-navbar-btn");

const stickyBar = document.querySelector("#sticky-navar");


stikyBarBtn.addEventListener("click", () => {
    stickyBar.classList.toggle("hidden");
    stickyBar.classList.toggle("absolute");
        });