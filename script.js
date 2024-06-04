
const favBtns = document.querySelectorAll('.fav-btn');


favBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('fav-btn-active');
    });
});