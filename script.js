function navigateTo(page) {
    window.location.href = page;
}

function toggleMusic() {
    const music = document.getElementById('background-music');
    const musicSwitch = document.getElementById('musicSwitch');
    if (musicSwitch.checked) {
        music.play();
    } else {
        music.pause();
    }
}

function playMusic(audioId) {
    // Stop any currently playing audio
    const allAudios = document.querySelectorAll('audio');
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset the current audio
    });

    // Play the selected audio
    const audio = document.getElementById(audioId);
    audio.play();
}

function stopMusic(audioId) {
    const audio = document.getElementById(audioId);
    audio.pause();
    audio.currentTime = 0; // Reset the audio
}
