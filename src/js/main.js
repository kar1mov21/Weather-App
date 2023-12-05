const loc = document.querySelector('.location'),
    locationDeg = document.querySelector('.location-deg'),
    kmh = document.querySelector('.weather'),
    inp = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    errorBox = document.querySelector('.error-div'),
    locationSSS = document.querySelector('.location-sss');

btn.addEventListener("click", () => {
    //API URLS////////
    const KEY = 'c1dbb18031eeee6d3645c1c39497237e'
    const citySearch = inp.value;


    ////API/////////////
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${KEY}&units=metric`)
        .then(data => data.json())
        .then(weather => {
            if (weather.cod == "404") {
                errorBox.style.display = 'block'
                loc.style.display = 'none'
                locationDeg.style.display = 'none'
                kmh.style.display = 'none'
            } else {
                console.log(weather);
                loc.style.display = 'block'
                locationDeg.style.display = 'block'
                kmh.style.display = 'block'
                kmh.style.display = 'flex'
                errorBox.style.display = 'none'
                loc.innerHTML = `${weather.name},`
                locationSSS.innerHTML = `${weather.sys.country}`
                locationDeg.innerHTML = `${Math.round(weather.main.temp)}&deg;C`
                //degColor
                if (weather.main.temp < 10 || weather.main.temp == 10) {
                    locationDeg.style.color = 'rgba(0, 221, 255, 0.449)'
                } else if (weather.main.temp > 20 || weather.main.temp == 20) {
                    locationDeg.style.color = 'red'
                } else if (weather.main.temp > 10 || weather.main.temp < 20) {
                    locationDeg.style.color = 'rgb(229, 229, 229)'
                }
                //degColor
                kmh.innerHTML = `<i class="fa-solid fa-wind"></i><h3>${weather.wind.speed}</h3><p>km/h</p>`
            }
        })
    //API//////////////
})
