namespace probots {
    
    //% block="play $myNote=BUZZER_TONE by $timeDuration ms on port %myPort=brickPortPitch"
    //% blockId=buzzerPassiveNoteOn
    //% subcategory="Passive Buzzer"
    //% color=#A31298
    //% weight=100
    export function buzzerPasiveNoteOn(myNote: any, timeDuration: number, myPort: any) {
        pins.analogSetPitchPin(myPort.P1);
        pins.analogPitch(myNote, timeDuration);
        return
    }

}