// 'use stricts';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof (guess));

    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No number!';
        displayMessage('⛔️ No number!');
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '⚡ Too highi!' : '⚡ Too low!';

            displayMessage(guess > secretNumber ? '⚡ Too highi!' : '⚡ Too low!');

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            // document.querySelector('.message').textContent = `😣 You lost the game! The number was: ${secretNumber} `;
            displayMessage(`😣 You lost the game! The number was: ${secretNumber}`);
        }
    }
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '⚡ Too highi!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('.message').textContent = `😣 You lost the game! The number was: ${secretNumber} `;
    //     }

    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '⚡ Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('.message').textContent = `😣 You lost the game! The number was: ${secretNumber}`;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});