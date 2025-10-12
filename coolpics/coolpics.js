const menuButton = document.querySelector(".menu-button");
const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal")
const exit = document.querySelector(".close-viewer");
const bigImage = document.querySelector(".big-view");

function toggleNav() {
    const menu = document.querySelector('.navbar');
    menu.classList.toggle("hide");
}
function handleResize() {
  const menu = document.querySelector(".navbar");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}
function openViewer(event) {
    const image = event.target.closest('img');
    if (image) {
        const smallSrc = image.src; 
        const altText = image.alt;
        const fileName = smallSrc.split('/').pop(); 
        const fullFileName = fileName.split('-')[0] + '-full.jpeg';
        const fullSrc = smallSrc.replace(fileName, fullFileName);
        bigImage.src = fullSrc;
        bigImage.alt = altText;
        modal.showModal();
    }
}
function closeViewer() {
  modal.close();
}

window.addEventListener("resize", handleResize);
menuButton.addEventListener("click", toggleNav);
gallery.addEventListener("click", openViewer)
exit.addEventListener("click", closeViewer)
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
})