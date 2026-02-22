/************ 🌧️ Heart Rain ************/
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);


/************ 🎶 Music Fade In ************/
const music = document.getElementById("bg-music");

document.body.addEventListener("click", () => {
  music.volume = 0;
  music.play();

  let vol = 0;
  let fadeIn = setInterval(() => {
    if (vol < 1) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fadeIn);
    }
  }, 100);

}, { once: true });


/************ 📸 Slideshow ************/
const slides = document.querySelectorAll(".love-img");
let current = 0;

function nextSlide() {
  slides[current].classList.remove("active");
  
  current = (current + 1) % slides.length;
  
  slides[current].classList.add("active");
}

// đổi ảnh mỗi 3 giây
setInterval(nextSlide, 3000);

/************ 💌 Typewriter Letter ************/
const letterText = `
Cục zàng của anh 💕,

Anh không biết từ khi nào…
em đã trở thành điều dễ thương nhất
trong cuộc sống của anh.

Có em, anh thấy bình yên hơn.
Có em, anh thấy ngày nào cũng đáng yêu.

Valentine này anh không có gì quá lớn,
chỉ có một trái tim rất thật…

và một lời hứa:

Công chúa của anh sẽ luôn được yêu thương 💖

Happy Valentine, my love.
`;

let i = 0;
const speed = 45;
const letterEl = document.getElementById("love-letter");

function typeWriter() {
  if (i < letterText.length) {
    letterEl.innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();


/************ 💖 Heart Click Reveal ************/
const clickSound = document.getElementById("click-sound");
const heartBtn = document.getElementById("heart-btn");
const hiddenMsg = document.getElementById("hidden-message");

heartBtn.addEventListener("click", () => {
  clickSound.play();
  hiddenMsg.classList.add("show");
});
