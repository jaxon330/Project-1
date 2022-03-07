const buttonColors = ['red', 'blue', 'green', 'yellow'] 
let gamePattern = []
let userClickedPattern = []
let level = 0;
let started = false;


// press any key to start the game
$(document).keypress(() => {
    if (started === false) {
        // $('.level').text(`Level ${level}`)
        setTimeout(() => {
            nextSequence()
        }, 300)
        started = true;
        $('h2').css('display', 'none')
    }




// User clicked pattern

$('.btn').click((e) => {
    // console.log(e.target.id)
    let userChoosenColor = e.target.id
    userClickedPattern.push(userChoosenColor)
    // console.log(userClickedPattern.length)
    playSound(userChoosenColor)
    //
    checkAnswer(userClickedPattern.length - 1)
}) 
   

// game condition
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        if (gamePattern.length === userClickedPattern.length) {
            
            setTimeout(function () {
                nextSequence()
            }, 1000)
            userClickedPattern = []
        }
    } else {
        wrongAnswer()


    }
}

// Computer clicked pattern
function nextSequence() {
    level++;
    $('.level').text(`Level ${level}`)
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChoosenColour = buttonColors[randomNumber]
    gamePattern.push(randomChoosenColour)
    gamePattern.forEach((randomChoosenColour, i) => {
        setTimeout(() => {
            $('#' + randomChoosenColour).fadeOut(100).fadeIn(100);
            playSound(randomChoosenColour)
        }, i * 500)
        
    })

    // console.log('computer ' + gamePattern);

}


// play sound

function playSound(index) {
    var audio = new Audio('sounds/' + index + '.mp3')
    audio.play();
}

// game over
function wrongAnswer() {
    // console.log('wrong');
    let audio = new Audio('sounds/error.wav')
    audio.play()
    $('body').addClass('red')
    setTimeout(function () {
        $('body').removeClass('red')
    }, 300)
    $('.restart').addClass('show')
    $('.level').text('Game Over, Press Restart button')
    $('h2').css('display', 'inline')
}

// restart button
$('.restart').click(() => {
    gamePattern = []
    userClickedPattern = []
    level = 0;
    $('.restart').removeClass('show')
    $('h2').css('display', 'none')
    setTimeout(() => {
        nextSequence()
    }, 300)
    
})

})

//  pop-up window 


const openBtn = $('#openModal')

const modal = $('#modal')

const close = $('#close')

function openModalFunction()  {
    $('#modal').css('display', 'block');
}

openBtn.click(openModalFunction)


function closeModalFunction()  {
    $('#modal').css('display', 'none');
  }

close.click(closeModalFunction)
