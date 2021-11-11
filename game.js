const buttonColors = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let userClickedPattern = []


function nextSequence() {
   let randomNumber = Math.floor(Math.random()*3)
   let randomChoosenColour = buttonColors[randomNumber]
   gamePattern.push(randomChoosenColour)
   $('#'+ randomChoosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColour)
  
}

nextSequence()


// User clicked pattern

$('.btn').on('click', (e) => {
    // console.log(e.target.id)
    let userChoosenColor = e.target.id
    userClickedPattern.push(userChoosenColor)
    console.log(userClickedPattern)
    playSound(userChoosenColor)
})

// how to play a sound in javascript?

function playSound(index) {
    var audio = new Audio('sounds/'+ index + '.mp3')
    audio.play();
}



