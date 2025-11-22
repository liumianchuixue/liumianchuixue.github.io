// 监听滚动事件
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#1a252f"; // 滚动后变深
    navbar.style.padding = "0.8rem 5%"; // 滚动后缩小 padding
  } else {
    navbar.style.backgroundColor = "#2c3e50"; // 恢复默认
    navbar.style.padding = "1rem 5%";
  }
});