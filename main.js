const heartButton = document.getElementById('heartButton');
const popup = document.querySelector('.popup');

heartButton.addEventListener('click', () => {
  popup.classList.toggle('hidden');
  setTimeout(() => {
    popup.style.opacity = 1;
  }, 100); // เพิ่มการหน่วงให้อนิเมชันน่ารักขึ้น
});
