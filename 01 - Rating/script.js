const btns = document.querySelectorAll('input.circle');
const ratingValue = document.getElementById('rating-value');
btns.forEach(el => {
    el.addEventListener('click', function () {
        document.querySelector('input.circle.select').classList.remove('select');
        el.classList.add('select');
        ratingValue.innerHTML = el.value;
    });
});

document.querySelector('.button').addEventListener('click', function () {
    let a = document.querySelectorAll('.card');
    a.forEach(el => {
        el.classList.contains('select') ? el.classList.remove('select') : el.classList.add('select');
    });
})