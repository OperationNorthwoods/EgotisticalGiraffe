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

function isGameOver() {
    const s1 = p1.score
    const s2 = p2.score
    const v1 = parseInt(playto.value)
    if (s1 >= v1 || s2 >= v1) {
        p1Button.disabled = true;
        p2Button.disabled = true;
        if (s1 >= v1) {
            p1Display.style.color = 'green'
            p2Display.style.color = 'red'
        } else {
            p2Display.style.color = 'green'
            p1Display.style.color = 'red'
        }
        return console.log('game ends')
    } else {
        return console.log('game continues')
    }
};

function resetScore() {
    p1.score = 0;
    p1Display.innerText = p1.score;
    p2.score = 0;
    p2Display.innerText = p2.score;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p2Display.style.color = 'black'
    p1Display.style.color = 'black'
}

p1Button.addEventListener('click', function (e) {
    p1.score++;
    p1Display.innerText = p1.score;
    isGameOver();
});

p2Button.addEventListener('click', function (e) {
    p2.score++;
    p2Display.innerText = p2.score;
    isGameOver();
});

reset.addEventListener('click', function (e) {
    resetScore();
    playto.value = '3';
});

playto.addEventListener('change', function () {
    resetScore();
})
