namespace probots {
    
    //% block="play %note=BUZZER_TONE by $time ms on port %myPort=brickPortPitch"    
    //% subcategory="Passive Buzzer"
    //% color=#A31298
    export function buzzerPasiveOn(note: any, time: number, myPort: any) {
        pins.analogSetPitchPin(myPort.P1);
        pins.analogPitch(note, time);
        return
    }

}