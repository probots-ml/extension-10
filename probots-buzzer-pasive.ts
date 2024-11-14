namespace probots {
    
    /**
     * Passive Buzzer. Play a note during a selected miliseconds time.
     * @param note Select the Tone note
     * @param time Set the duration in miliseconds
     * @param myPort Select the port to connect the pasive Buzzer.
     */

    //% block="play %note=TONE by $time ms on %myPort=brickPortPitch"
    //% time.min=10 time.max=5000 time.defl=1000
    //% note.defl=TONE.C
    //% weight=100
    //% subcategory="Passive Buzzer"
    //% color=#A31298
    export function buzzerPasiveOn(note:TONE, time:number, myPort: any): void {
 
        pins.analogSetPitchPin(myPort.P1);
        pins.analogPitch(note, time);
        return
    }

}