const input = document.querySelector(".form-control");
const a = document.querySelector("a");
const style = document.querySelector("style");
let counter = "1";
a.addEventListener("click", (e) => {
  counter++;
  bgİmage();
  getdata(input.value);
  e.preventDefault();
  if (counter == 7) {
    counter -= 7;
  }
});

function getdata(name) {
  const key = "c2bbca596984a6c346db36be9eb2ca9e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&units=metric&lang=en`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const {
        name,
        weather: [{ icon }],
        wind: { speed },
        sys: { country },
        main: { temp, feels_like },
        weather: [{ description }],
      } = data;
      const city = document.querySelector(".city");
      const tempature = document.querySelector(".tempature");
      const weather = document.querySelector(".weather");
      const count = document.querySelector(".country");
      const iconP = document.querySelector(".iconP");

      city.textContent = `${name}`;
      count.textContent = `${country}`;
      tempature.textContent = `${Math.floor(temp)}°C`;
      weather.textContent = `${description}`;
      iconP.src = ` http://openweathermap.org/img/wn/${icon}@2x.png`;

      // console.log(data);
    })
    .catch((err) => console.warn(err));
}

function bgİmage() {
  style.innerHTML = `body{
    background-image: url(./img/${counter}.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }`;
}
