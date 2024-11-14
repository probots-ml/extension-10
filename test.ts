basic.forever(function () {
   
   
    //probots.buzzerPasiveNoteOn(BUZZER_TONE.A, 500, probots.brickPortPitch(ConnectionPortsAnalogPitch.CON1))
    
    probots.rgbPortOn(probots.brickPort4Pins(ConnectionPorts4Pins.CON7), ColorLedRGB.Red)
    basic.pause(500)
    probots.rgbPortOff(probots.brickPort4Pins(ConnectionPorts4Pins.CON7))
    basic.pause(500)

    probots.rgbPortOn(probots.brickPort4Pins(ConnectionPorts4Pins.CON7), ColorLedRGB.Green)
    basic.pause(500)
    probots.rgbPortOff(probots.brickPort4Pins(ConnectionPorts4Pins.CON7))
    basic.pause(500)

    probots.rgbPortOn(probots.brickPort4Pins(ConnectionPorts4Pins.CON7), ColorLedRGB.Blue)
    basic.pause(500)
    probots.rgbPortOff(probots.brickPort4Pins(ConnectionPorts4Pins.CON7))
    basic.pause(500)
})
