const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const about = document.querySelector(".about");

// btns.forEach((btn) => {
//   btn.classList.remove("active");
//   btn.addEventListener("click", function (e) {
//     const id = e.currentTarget.dataset.id;
//     const element = document.getElementById(id);
//     articles.forEach((article) => {
//       // if (article.classList.contains('active')) article.classList.remove('active')
//       article.classList.remove("active");
//     });
//     element.classList.add("active");
//     btn.classList.add("active");
//   });
// });

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove all active classes
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
