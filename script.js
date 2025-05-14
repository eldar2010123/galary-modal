const galleryImg = document.querySelectorAll('.thumbnail');

const modal = document.createElement('div');
const modalImg = document.createElement('img');
modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: rgba(33, 33, 33, 0.63);
    opacity: 1;
    transition: 0.5s;
    visibility: hidden;
`
modalImg.style.cssText = `
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 960px;
    height: 600px;
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    cursor: pointer;
    z-index: 2000;
`
modal.appendChild(modalImg);
document.body.appendChild(modal);

galleryImg.forEach(image => {
    image.addEventListener('click', () => {
        modalImg.src = image.src;
        modal.style.opacity = '1'
        modal.style.visibility = 'visible'
    });
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.opacity = '0'
        modal.style.visibility = 'hidden'
    }
});