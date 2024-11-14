namespace probots {
    
    //% block="play note $myNote=BUZZER_TONE by $timeDuration ms on port %myPort=brickPortPitch"
    //% blockId=buzzerPassiveNoteOn
    //% subcategory="Passive Buzzer"
    //% color=#A31298
    //% weight=100
    //% myNote.defl=BUZZER_TONE.A4
    //% timeDuration.min=10 timeDuration.max=5000 time.timeDuration=1000
    export function buzzerPasiveNoteOn(myNote: number, timeDuration: number, myPort: any): void {
        pins.analogSetPitchPin(myPort.P1);
        pins.analogPitch(myNote, timeDuration);
        return
    }

}