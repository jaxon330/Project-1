
const buttonColors = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let userClickedPattern = []
let level = 0;
let started = false;

$(document).keypress(() => {
    if (!started) {
        // $('.level').text(`Level ${level}`)
        nextSequence()
        started = true;
    }

})



// User clicked pattern

$('.btn').click((e) =>  {
    // console.log(e.target.id)
    let userChoosenColor = e.target.id
    userClickedPattern.push(userChoosenColor)
    console.log(userClickedPattern.length)
    playSound(userChoosenColor)
    //
    checkAnswer(userClickedPattern.length-1)
    console.log('user '+userClickedPattern);
})

// game condition
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log('success');
        // console.log('computer '+gamePattern);
        console.log('user '+userClickedPattern);
        // console.log(userClickedPattern.length)
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(nextSequence(), 1000)
            userClickedPattern = []
        }
    } else {
        console.log('wrong');
        // console.log('computer '+gamePattern);
        // console.log('user '+userClickedPattern);
        $('body').css('background-color', 'red')
    }
}

function nextSequence() {
    level++;
    $('.level').text(`Level ${level}`)
   let randomNumber = Math.floor(Math.random()*3)
   let randomChoosenColour = buttonColors[randomNumber]
   gamePattern.push(randomChoosenColour)
   $('#'+ randomChoosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColour)
    console.log('computer '+gamePattern);
   
}



// how to play a sound in javascript?

function playSound(index) {
    var audio = new Audio('sounds/'+ index + '.mp3')
    audio.play();
}


