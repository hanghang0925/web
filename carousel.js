let slideIndex = 0; // 轮播图的当前索引
const slides = document.querySelectorAll('.carousel-slide img'); // 获取所有的轮播图图片
const totalSlides = slides.length; // 轮播图图片总数

function showSlides() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none"; // 首先隐藏所有的图片
  }
  slideIndex++;
  if (slideIndex > totalSlides) {slideIndex = 1} // 如果索引超出图片数量，重置为第一张图片
  slides[slideIndex - 1].style.display = "block"; // 显示当前图片
  setTimeout(showSlides, 2000); // 每2秒自动切换图片
}

showSlides(); // 调用函数以开始轮播

// 添加按钮事件监听器
document.querySelector('.prev-btn').addEventListener('click', function() {
  slideIndex -= 2; // 调整索引以显示前一张图片
  if (slideIndex < 0) {slideIndex = totalSlides - 1;} // 如果索引为负，切换到最后一张图片
  showSlides();
});

document.querySelector('.next-btn').addEventListener('click', function() {
  showSlides(); // 显示下一张图片
});
