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
function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let resultMessage = '';
    
    if (userChoice === computerChoice) {
        resultMessage = `It's a tie! You both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = `You win! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${computerChoice}.`;
        openWinningModal(); // Open the winning modal
    } else {
        resultMessage = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${userChoice}.`;
    }

    document.getElementById('result').innerText = resultMessage;
}

function openWinningModal() {
    const modal = document.getElementById("winningModal");
    modal.style.display = "flex"; // Display the modal
}

function closeModal() {
    const modal = document.getElementById("winningModal");
    modal.style.display = "none"; // Hide the modal
}

function yesClicked() {
    closeModal(); // Close the winning modal
    openFinalModal(); // Open the final message modal
}

function openFinalModal() {
    const finalModal = document.getElementById("finalModal");
    finalModal.style.display = "flex"; // Display the final message modal
}

function closeFinalModal() {
    const finalModal = document.getElementById("finalModal");
    finalModal.style.display = "none"; // Hide the final message modal
}

function moveNoButton() {
    const noButton = document.getElementById("noButton");
    const modalContent = document.querySelector('.modal-content');

    // Calculate new random position within the modal content
    const x = Math.random() * (modalContent.clientWidth - 150); // Assuming button width is about 150px
    const y = Math.random() * (modalContent.clientHeight - 50); // Assuming button height is about 50px

    noButton.style.position = 'absolute'; // Position absolute to move around freely
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}