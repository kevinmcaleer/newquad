function helloworld() {
    basic.showString("Hello World")
}

function Standup() {
    Servo.Servo(FrontLeftFoot, 150)
    Servo.Servo(FrontRightFoot, 150)
    Servo.Servo(BackLeftFoot, 150)
    Servo.Servo(BackRightFoot, 150)
    basic.pause(1000)
}

function Stop() {
    let FrontLeftLeg = 0
    Servo.Servo(FrontLeftFoot, 90)
    Servo.Servo(FrontLeftLeg, 90)
    Servo.Servo(BackLeftFoot, 90)
    Servo.Servo(BackRightFoot, 90)
}

let BackRightFoot = 0
let BackLeftFoot = 0
let FrontRightFoot = 0
let FrontLeftFoot = 0
basic.showString("Hello!")
basic.showLeds(`
    . . . . .
    # . . . #
    . . . . .
    # . . . #
    . # # # .
    `)
soundExpression.giggle.playUntilDone()
FrontLeftFoot = 0
FrontRightFoot = 7
BackLeftFoot = 5
BackRightFoot = 3
basic.forever(function on_forever() {
    Stop()
})
