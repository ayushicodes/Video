let videoContainer = document.querySelector('.video-container')
let switchbtn = document.querySelector('.switch-btn')
let preloader = document.querySelector('.preloader__item')


switchbtn.addEventListener('click', function () {
    if (!switchbtn.classList.contains('slide')) {
        switchbtn.classList.add('slide')
        videoContainer.pause()
    }
    else {
        switchbtn.classList.remove('slide')
        videoContainer.play()
    }


})



window.addEventListener('load', function () {
    preloader.classList.toggle('hide-preloader')
})