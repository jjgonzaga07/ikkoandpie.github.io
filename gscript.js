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

function openModal(imageSrc, description) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    
    modal.style.display = 'flex'; // Show modal
    modalImage.src = imageSrc; // Set image source
    modalDescription.innerHTML = description; // Set description
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none'; // Hide modal
}