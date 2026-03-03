document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.demo-card').forEach(card => {
        const audio = card.querySelector('.audio-player');
        const playBtn = card.querySelector('.playBtn');
        const pauseBtn = card.querySelector('.pauseBtn');
        const progressFill = card.querySelector('.demo-progress-fill');
        const currentTimeEl = card.querySelector('.current-time');
        const totalTimeEl = card.querySelector('.total-time');

        if (audio && playBtn && pauseBtn) {

            playBtn.addEventListener('click', () => audio.play());
            pauseBtn.addEventListener('click', () => audio.pause());

            // Format seconds → M:SS
            const formatTime = (seconds) => {
                const m = Math.floor(seconds / 60);
                const s = Math.floor(seconds % 60).toString().padStart(2, '0');
                return `${m}:${s}`;
            };

            // Set total duration once metadata loads
            audio.addEventListener('loadedmetadata', () => {
                totalTimeEl.textContent = formatTime(audio.duration);
            });

            // Update progress + current time
            audio.addEventListener('timeupdate', () => {
                const percent = (audio.currentTime / audio.duration) * 100;
                progressFill.style.width = percent + '%';
                currentTimeEl.textContent = formatTime(audio.currentTime);
            });

            // Reset when finished
            audio.addEventListener('ended', () => {
                progressFill.style.width = '0%';
                currentTimeEl.textContent = '0:00';
            });
        }
    });

    // STOP AUDIO WHEN LEAVING TAB
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.querySelectorAll('.audio-player').forEach(audio => audio.pause());
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