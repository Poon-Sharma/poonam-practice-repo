function convertTemperature(value, type)
{
    if (typeof value !== "number" || (type !== "C" && type !== "F")) {
        console.log("Invalid input. Value must be a number and type must be 'C' or 'F'.");
        return; 
    }


    if(type == "F")
    {
        let CelsiusValue= (value-32)*5/9
        console.log(`converted Tem in Celsious is ${CelsiusValue}`);
        
    }

    else if(type == "C")
    {
        let FahrenheitValue= (value*9/5)+32
        console.log(`converted Temp. in Fahrenhiet is ${FahrenheitValue}`);
        
    }



    }

convertTemperature(100,"C")
convertTemperature(0,"F")
convertTemperature("100","F")
convertTemperature(0,15)
