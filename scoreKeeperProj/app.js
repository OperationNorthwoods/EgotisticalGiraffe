const playto = document.querySelector('#playto')
const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const reset = document.querySelector('#reset')

const p1 = {
    score: 0,

}

const p2 = {
    score: 0,

}

function isGameOver(input) {
    if (p1.score === playto.value || p2.score === playto.value) {
        p1Button.setAttribute('disabled', '')
        p2Button.setAttribute('disabled', '')
    } else { }
};

p1Button.addEventListener('click', function (e) {
    isGameOver();
    p1.score++
    p1Display.innerText = p1.score
});

p2Button.addEventListener('click', function (e) {
    isGameOver();
    p2.score++
    p2Display.innerText = p2.score
});

reset.addEventListener('click', function (e) {
    p1.score === 0;
    p1Display.innerText = p1.score
    p2.score === 0;
    p2Display.innerText = p2.score
});
