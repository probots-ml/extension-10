

enum BUZZER_TONE {
    //% block=A4
    A = 440,
    //% block=A#4
    A_SHARP = 466,
    //% block=B4
    B = 494,
    //% block=C4
    C = 523,
    //% block=C#4
    C_SHARP = 554,
    //% block=D4
    D = 587,
    //% block=D#4
    D_SHARP = 622,
    //% block=E4
    E = 659,
    //% block=F4
    F = 698,
    //% block=F#4
    F_SHARP = 740,
    //% block=G4
    G = 784,
    //% block=G#4
    G_SHARP = 830
}

namespace probots {

    //% block="play note $myNote=BUZZER_TONE by $timeDuration ms on port %myPort=brickPortPitch"
    //% blockId=buzzerPasiveToneNoteOn
    //% subcategory="Passive Buzzer"
    //% color=#A31298
    //% weight=90
    //% myNote.defl=BUZZER_TONE.A
    //% timeDuration.min=10 timeDuration.max=5000 timeDuration.defl=1000
    export function buzzerPasiveToneNoteOn(myNote?: any, timeDuration?: number, myPort?: any): void {
        pins.analogSetPitchPin(myPort.P1);
        pins.analogPitch(myNote, timeDuration);
        return
    }

}