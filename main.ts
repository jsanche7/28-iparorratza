basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() < 45 || input.compassHeading() > 315) {
        music.playMelody("G F G A G F E D ", 301)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
