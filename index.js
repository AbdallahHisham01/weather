const d = new Date();

let hours = d.getHours();
let day = d.getDay();
let month = d.getMonth();
let date = d.getDate()

var dayName;
var monthName;
var daysList = [];
var s = ""

months(month);
days(day);

getLocation()

document.querySelector("input[type='text']").addEventListener("keydown", async function (e) {
    if (e.key == "Enter") {
        s = document.querySelector("input[type='text']").value
        var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=8faff211082e4caea2120821220612&q=${s}&days=3`);
        var finalRes = await res.json();
        getToDayTemp(finalRes);
        getSecondDay(finalRes);
        getThirdDay(finalRes);
    }
})


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

async function showPosition(position) {
    var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=8faff211082e4caea2120821220612&q=${position.coords.latitude},${position.coords.longitude}&days=3`);
    var finalRes = await res.json();
    getToDayTemp(finalRes);
    getSecondDay(finalRes);
    getThirdDay(finalRes);
}


function getToDayTemp(finalRes) {
    console.log(finalRes)
    document.getElementById("cityName1").innerHTML = finalRes.location.name;
    document.getElementById("toDayNum").innerHTML = date
    document.getElementById("toDayMonth").innerHTML = monthName
    document.getElementById("cityTemp1").innerHTML = finalRes.forecast.forecastday[0].hour[hours].temp_c + "<sup> o</sup>C";
    document.getElementById("weatherCondition1").innerHTML = finalRes.forecast.forecastday[0].hour[hours].condition.text;
    document.getElementById("weatherIcon1").classList.replace("w-0","w-75")
    document.getElementById("weatherIcon1").src = finalRes.forecast.forecastday[0].hour[hours].condition.icon
    document.getElementById("toDayName").innerHTML = daysList[0]
}

function getSecondDay(finalRes) {
    document.getElementById("maxTemp2").innerHTML = finalRes.forecast.forecastday[1].day.maxtemp_c + "<sup> o</sup>C";
    document.getElementById("minTemp2").innerHTML = finalRes.forecast.forecastday[1].day.mintemp_c + "<sup> o</sup>C";
    document.getElementById("weatherCondition2").innerHTML = finalRes.forecast.forecastday[1].day.condition.text;
    document.getElementById("weatherIcon2").src = finalRes.forecast.forecastday[1].day.condition.icon
    document.getElementById("dayName2").innerHTML = daysList[1]
}

function getThirdDay(finalRes) {
    document.getElementById("maxTemp3").innerHTML = finalRes.forecast.forecastday[2].day.maxtemp_c + "<sup> o</sup>C";
    document.getElementById("minTemp2").innerHTML = finalRes.forecast.forecastday[2].day.mintemp_c + "<sup> o</sup>C";
    document.getElementById("weatherCondition3").innerHTML = finalRes.forecast.forecastday[2].day.condition.text;
    document.getElementById("weatherIcon3").src = finalRes.forecast.forecastday[2].day.condition.icon
    document.getElementById("dayName3").innerHTML = daysList[2]
}

function days(day) {

    for (let i = 0; i < 3; i++) {
        switch (day) {
            case 0:
                daysList[i] = "Sunday";
                break;
            case 1:
                daysList[i] = "Monday";
                break;
            case 2:
                daysList[i] = "Tuesday";
                break;
            case 3:
                daysList[i] = "Wednsday";
                break;
            case 4:
                daysList[i] = "Thurseday";
                break;
            case 5:
                daysList[i] = "Friday";
                break;
            case 6:
                daysList[i] = "Saturday";
        }
        if (day == 6) day = 0
        else day++;

    }

}

function months(month) {
    switch (month) {
        case 0:
            return monthName = "January"
        case 1:
            return monthName = "February"
        case 2:
            return monthName = "March"
        case 3:
            return monthName = "April"
        case 4:
            return monthName = "May"
        case 5:
            return monthName = "June"
        case 6:
            return monthName = "July"
        case 7:
            return monthName = "August"
        case 8:
            return monthName = "Septemper"
        case 9:
            return monthName = "October"
        case 10:
            return monthName = "November"
        case 11:
            return monthName = "December"
    }
}