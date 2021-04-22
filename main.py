def helloworld():
    basic.show_string("Hello World")
def Standup():
    Servo.servo(FrontLeftFoot, 150)
    Servo.servo(FrontRightFoot, 150)
    Servo.servo(BackLeftFoot, 150)
    Servo.servo(BackRightFoot, 150)
    basic.pause(1000)
def Stop():
    FrontLeftLeg = 0
    Servo.servo(FrontLeftFoot, 90)
    Servo.servo(FrontLeftLeg, 90)
    Servo.servo(BackLeftFoot, 90)
    Servo.servo(BackRightFoot, 90)
BackRightFoot = 0
BackLeftFoot = 0
FrontRightFoot = 0
FrontLeftFoot = 0
basic.show_string("Hello!")
basic.show_leds("""
    . . . . .
    # . . . #
    . . . . .
    # . . . #
    . # # # .
    """)
soundExpression.giggle.play_until_done()
FrontLeftFoot = 0
FrontRightFoot = 7
BackLeftFoot = 5
BackRightFoot = 3

def on_forever():
    Stop()
basic.forever(on_forever)
music.play_tone(Note.C, music.beat())