const _inputLeng = document.querySelector('.input-sw');

_inputLeng.addEventListener('click', (e) =>{
    setTimeout(function() {
        location.href = `${location.origin}/change-lang`;

    }, 500);
})


