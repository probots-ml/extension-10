

namespace probots {

    //% block="turn on LED on %myPort=brickPort"  
    //% weight=100
    //% subcategory="LED"
    //% color=#335566
    export function ledOn(myPort:any): void {
        pins.digitalWritePin(myPort.P0, 1);
        pins.digitalWritePin(myPort.P1, 0);
        return
    }

    //% block="turn on LED on %myPort=brickPort with intensity $intensity"
    //% weight=98
    //% subcategory="LED"
    //% color=#335566
    //% intensity.defl=50
    //% intensity.min=0 intensity.max=100
    export function ledOnWithPower(myPort: any, intensity: number): void {
        let intensityMapped = pins.map(intensity, 0, 100, 0, 1024);
        pins.analogWritePin(getAnalogPin(myPort.P0), intensityMapped);
        pins.digitalWritePin(myPort.P1, 0);
        return
    }

    //% block="turn off LED on %myPort=brickPort"
    //% weight=97
    //% subcategory="LED"
    //% color=#335566
    export function ledOff(myPort: any): void {
        pins.digitalWritePin(myPort.P0, 0);
        pins.digitalWritePin(myPort.P1, 0);
        return
    }
}

