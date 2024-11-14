// Añade tu código aquí

enum ToneFrequency {
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

    
    //% block="play %singleNote=ToneFrequency on %myPort=brickPort by a second"
    //% weight=100
    //% subcategory="Passive Buzzer"
    //% color=#DA21DA
    export function doSomeNote(singleNote:any, myPort: any)
    {
        pins.analogSetPitchPin(myPort.P1);
        pins.analogPitch(singleNote, 1000);
        return;
    }

    //% block="play A(440) on %myPort=brickPort by a second"
    //% weight=98
    //% subcategory="Passive Buzzer"
    //% color=#DA21DA
    export function doSomeNoise(myPort: any) {
        pins.analogSetPitchPin(myPort.P1);
        pins.analogPitch(440, 1000);
        return;
    }
}