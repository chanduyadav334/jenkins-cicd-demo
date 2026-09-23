function playGame(userChoice) {
    const randomNumber = Math.random();
    let computerChoice = '';

    if (randomNumber >= 0 && randomNumber < 1 / 2) {
        computerChoice = 'head';
    } else if (randomNumber >= 1 / 2 && randomNumber < 1) {
        computerChoice = 'trail';
    }

    console.log(`Computer choice: ${computerChoice}`);

    let outcome = '';
    if (userChoice === computerChoice) {
        outcome = 'you win';
    } else {
        outcome = 'you lose';
    }

    console.log(`Outcome: ${outcome}`);
    alert(`you selected ${userChoice}. computer selected ${computerChoice}. ${outcome}`);
}

document.addEventListener('DOMContentLoaded', () => {
    const headBtn = document.getElementById('head-btn');
    const trailBtn = document.getElementById('trail-btn');

    if (headBtn) {
        headBtn.addEventListener('click', () => playGame('head'));
    }

    if (trailBtn) {
        trailBtn.addEventListener('click', () => playGame('trail'));
    }
});

