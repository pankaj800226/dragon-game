// ---------------------lets build the game dragon game using js---------------------------
let score = 0
let cross = true

let audioPlay = new Audio('music.mp3')
let audioOver = new Audio('gameover.mp3')
setTimeout(() => {
    audioPlay.play()
}, 1000)

// dinosaur jumping
document.onkeydown = function (e) {
    // console.log("key code is : ", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino')
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700)
    }

    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dinoX + 112 + 'px'
    }

    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = (dinoX - 112) + 'px'
    }
}

// check space ya gap to dinosaur and dragon
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dinoY = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))

    obstacleX = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    obstacleY = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))



    offSetX = Math.abs(dinoX - obstacleX)
    offSetY = Math.abs(dinoY - obstacleY)

    // game over
    if (offSetX < 113 && offSetY < 52) {
        gameOver.style.visibility = 'visible'
        obstacle.classList.remove('obstacleAni')
        audioPlay.pause()
        audioOver.play()
        setTimeout(() => {
            audioOver.pause()
        }, 1000)
    } else if (offSetX < 145 && cross) {
        score += 1
        updateScore(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000)
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'))
            newDur = aniDur - 0.1
            obstacle.style.animationDuration = newDur + 's'
        }, 500)
    }


}, 10)

function updateScore(score) {
    scoreCont.innerHTML = 'Your score: ' + score
}