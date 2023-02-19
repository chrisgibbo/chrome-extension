fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").textContent = `Photo By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1486912500284-6f2462ba07ea?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjgyNzAxODA&ixlib=rb-4.0.3&q=80")`

    })

function getCurrenTime() {

    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-GB", { timeStyle: "medium" })
}
setInterval(getCurrenTime), 1000

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
        <img src=${iconUrl} />
        <p class="weather-temp">${Math.round(data.main.temp)}°</p>
        <p class="weather-city">${data.name}</p>`
        })
        .catch(err => console.log(err))
});


// accuracy: 24.9
// altitude: null
// altitudeAccuracy: null
// heading: null
// latitude: 52.5773045
// longitude: -1.1264702
