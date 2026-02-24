document.addEventListener('DOMContentLoaded', () => {

    // AUDIO BUTTONS
    document.querySelectorAll('.audiobox').forEach(box => {
        const audio = box.querySelector('.audio-player');
        const playBtn = box.querySelector('.playBtn');
        const pauseBtn = box.querySelector('.pauseBtn');

        if (playBtn && pauseBtn && audio) {
            playBtn.addEventListener('click', () => audio.play());
            pauseBtn.addEventListener('click', () => audio.pause());
        }
    });

    // SIDE NAV
    const hamburger = document.querySelector('.hamburger');
    const sidenav = document.querySelector('.side-nav');

    if (hamburger && sidenav) {
        hamburger.addEventListener('click', () => {
            sidenav.classList.toggle('open');
        });
    }
});