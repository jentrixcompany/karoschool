// 1. Highlight active navigation link
const links = document.querySelectorAll("nav a");
const currentPage = location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.textDecoration = "underline";
  }
});

// 2. Welcome message (shows once)
if (!sessionStorage.getItem("visited")) {
  alert("Welcome to Karo School Website!");
  sessionStorage.setItem("visited", "yes");
}

// 3. Back to top button
const topBtn = document.createElement("button");
topBtn.innerText = "⬆ Top";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px";
topBtn.style.display = "none";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};