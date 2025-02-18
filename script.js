document.addEventListener('DOMContentLoaded', function() {
    const div1 = document.querySelector('.div1 p');
    const div2 = document.querySelector('.div2');

    div1.addEventListener('mouseenter', function() {
        div2.style.maxWidth = '300px';
        div2.style.backgroundColor = 'black';
    });

    div1.addEventListener('mouseleave', function() {
        div2.style.maxWidth = '';
        div2.style.backgroundColor = 'aqua';
    });
});