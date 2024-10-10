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

function openMessage(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeMessage(id) {
    document.getElementById(id).style.display = 'none';
}
