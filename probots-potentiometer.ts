namespace probots {

    /**
     * Get a value of potentiometer. The range of reading could be between 0 from 100.
     * @param myPort port of connection
    */
    //%blockId=potentiometer
    //% block="value of potentiometer in %myPort=brickPortADC"
    //% weight=100
    //% subcategory="Potentiometer"
    //% color=#663377
    export function potentiometer(myPort: any): number {
        led.enable(false);
        let analogValue = pins.analogReadPin(getAnalogPin(myPort.P1))
        led.enable(true);
        return pins.map(analogValue, 0, 1023, 0, 100);
    }

}