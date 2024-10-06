const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const img = document.getElementById("tab-img");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }

  if (id === "red") {
    img.src = "images/r.webp"; 
  } if (id === "green") {
    img.src = "images/g.webp"; 
  } if (id === "blue") {
    img.src = "images/b.webp"; 
  }
});
