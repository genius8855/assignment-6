window.onload = function () {
    const imageContainer = document.querySelector('.image-container');
    const loginContainer = document.querySelector('.login-container');

    imageContainer.classList.remove('expand', 'shift-right-half');
    loginContainer.classList.remove('slide-in-left');

    setTimeout(() => {
        imageContainer.classList.add('expand');
    }, 100);

    setTimeout(() => {
        imageContainer.classList.add('shift-right-half');
        loginContainer.classList.add('slide-in-left');
    }, 4500);

    const circle = document.querySelector('.circle');

    circle.style.transition = 'none';
    circle.classList.remove('move-to-top-left');

    circle.offsetHeight;

    circle.style.transition = 'all 1s ease';
    setTimeout(() => {
        circle.classList.add('move-to-top-left');
    }, 4500);


    setTimeout(() => {
        document.getElementById('circle').style.display = 'block';
        document.getElementById('circle').classList.add('zoom-in');
    }, 2000);
};


