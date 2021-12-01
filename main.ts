input.onButtonPressed(Button.A, function () {
    radio.sendString("Y")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("N")
})
input.onGesture(Gesture.Shake, function () {
    question = randint(1, 10)
    if (question == 1) {
        radio.sendString("Do you like micro bits?")
    }
    if (question == 2) {
        radio.sendString("Do you feel fine?")
    }
    if (question == 3) {
        radio.sendString("Are you excited?")
    }
    if (question == 4) {
        radio.sendString("Are You having fun?")
    }
    if (question == 5) {
        radio.sendString("Do you like this?")
    }
    if (question == 6) {
        radio.sendString("Is this cool?")
    }
    if (question == 7) {
        radio.sendString("Do you have any devices?")
    }
    if (question == 8) {
        radio.sendString("Do you like coding?")
    }
    if (question == 9) {
        radio.sendString("Do you like road trips?")
    }
    if (question == 10) {
        radio.sendString("Is this hard to read?")
    }
})
let question = 0
radio.setGroup(1)
