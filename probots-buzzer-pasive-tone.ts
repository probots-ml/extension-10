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

    
    //% block="by a $timeDuration ms play %singleNote=ToneFrequency on %myPort=ConnectionPortsAnalogPitch"
    //% timeDuration.min=10 timeDuration.max=5000 timeDuration.defl=1500
    //% singleNote.defl=ToneFrequency.A4
    //% weight=100
    //% subcategory="Passive Buzzer"
    //% color=#DA21DA
    export function doSomeNote(timeDuration: number, singleNote: ToneFrequency, myPort: ConnectionPortsAnalogPitch)
    {
        pins.analogSetPitchPin(brickPortPitch(myPort).P1);
        pins.analogPitch(singleNote, timeDuration);
        return;
    }

/*
    //% block="play %singleNote=ToneFrequency on %myPort=brickPort by a $timeDuration"
    //% singleNote.defl=ToneFrequency.A4
    //% timeDuration.min=10 timeDuration.max=5000 timeDuration.defl=1500
    //% weight=98
    //% subcategory="Passive Buzzer"
    //% color=#DA21DA
    export function doSomeNoise(singleNote: number, myPort: any, timeDuration: number) {
        pins.analogSetPitchPin(myPort.P1);
        pins.analogPitch(singleNote, timeDuration);
        return;
    }
    */
}