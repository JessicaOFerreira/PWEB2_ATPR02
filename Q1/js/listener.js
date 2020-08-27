let valorTemperatura = document.querySelector("#valTemp");
let conTemp = document.querySelector("#conTemp");
let uniAtual = document.querySelector("#ua");
let uniConve = document.querySelector("#uc");
let tConvertidas = document.querySelector("#tConvertidas")
let ta1 = document.querySelector("#ta1");
let ta2 = document.querySelector("#ta2");

//----------------------------------------------------------------------
let celsiusFahrenheit = (temps) =>{
    return (temps * 9/5) + 32;
}

let celsiusKelvin = (temps) =>{
    return temps*1 + 273.15;
}

let fahrenheitCelsius = (temps) =>{
    return (temps - 32) * 5/9;
}

let fahrenheitKelvin = (temps) => {
    return (temps - 32) * 5/9 + 273.15;
}

let kelvinCelsius = (temps) =>{
    return temps - 273.15;
}

let kelvinFahrenheit = (temps) =>{
    return (temps - 273.15) * 9/5 + 32;
}

let exibir = (uniA, resulValo, uniC, valConv) =>{
        ta1.append(uniA.value);
        ta1.insertAdjacentHTML("beforeend","--->");
        ta1.append(resulValo);

        ta2.append(uniC.value);
        ta2.insertAdjacentHTML("beforeend","--->");
        ta2.append(valConv);
}
//------------------------------------------------------------------------

conTemp.addEventListener("click", function () {
    let valores = valorTemperatura.value;

    let resulValores = valores.split(",");
    //------------------------------------------------------------
    

    if (uniAtual.value == "Celsius" && uniConve.value == "Fahrenheit"){
        let valConvert = resulValores.map(celsiusFahrenheit);

        exibir(uniAtual,resulValores,uniConve, valConvert);
    }

    if (uniAtual.value == "Celsius" && uniConve.value == "Kelvin"){
        let valConvert = resulValores.map(celsiusKelvin);

        exibir(uniAtual,resulValores,uniConve, valConvert);
    }

    if (uniAtual.value == "Fahrenheit" && uniConve.value == "Celsius"){
        let valConvert = resulValores.map(fahrenheitCelsius);

        exibir(uniAtual,resulValores,uniConve, valConvert);
    }

    if (uniAtual.value == "Fahrenheit" && uniConve.value == "Kelvin"){
        let valConvert = resulValores.map(fahrenheitKelvin);

        exibir(uniAtual,resulValores,uniConve, valConvert);
    }

    if (uniAtual.value == "Kelvin" && uniConve.value == "Celsius"){
        let valConvert = resulValores.map(kelvinCelsius);

        exibir(uniAtual,resulValores,uniConve, valConvert);
    }

    if (uniAtual.value == "Kelvin" && uniConve.value == "Fahrenhei"){
        let valConvert = resulValores.map(kelvinFahrenheit);

        exibir(uniAtual,resulValores,uniConve, valConvert);
    }
     //------------------------------------------------------------
    
}); 

valorTemperatura.addEventListener("focus", function () {
        valorTemperatura.value = "";
        ta1.innerHTML="";
        ta2.innerHTML="";
});


