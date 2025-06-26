let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let carousel = document.querySelector('.carousel');
let listItem = document.querySelector('.carousel .list');
let thumbnail = document.querySelector('.carousel .thumbnail');

let timeRunning = 400000;      // Time for animation to complete
let timeAutoNext = 500000;     // Time between auto slides
let runTimeOut;
let runAutoRun;

// Manual navigation
nextBtn.onclick = function () {
  showSlider('next');
};

prevBtn.onclick = function () {
  showSlider('prev');
};

// Main slider function
function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carousel .list .item');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

  if (type === 'next') {
    listItem.appendChild(itemSlider[0]);
    thumbnail.appendChild(itemThumbnail[0]);
    carousel.classList.add('next');
  } else {
    let last = itemSlider.length - 1;
    listItem.prepend(itemSlider[last]);
    thumbnail.prepend(itemThumbnail[last]);
    carousel.classList.add('prev');
  }

  // Remove animation classes after it's done
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousel.classList.remove('next');
    carousel.classList.remove('prev');
  }, timeRunning);

  // Restart auto slide timer
  clearTimeout(runAutoRun);
  startAutoSlide();
}

// Auto slide function
function startAutoSlide() {
  runAutoRun = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);
}

// Start auto sliding on page load
startAutoSlide();

// Autoload to stop on mouseover
carousel.addEventListener("mouseover", () => {
  clearTimeout(runAutoRun);
});

carousel.addEventListener("mouseout", () => {
  startAutoSlide();
});

