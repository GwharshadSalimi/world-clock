function update() {
  let afghanistanElement = document.querySelector("#afghanistan");
  let afghanistanDateElement = afghanistanElement.querySelector(".date");
  let afghanistanTimeElement = afghanistanElement.querySelector(".time");

  let afghanistanTime = moment().tz("Asia/Kabul");

  afghanistanDateElement.innerHTML = afghanistanTime.format("MMMM Do YYYY");
  afghanistanTimeElement.innerHTML = `${afghanistanTime.format(
    "h:mm:ss"
  )} <small>${afghanistanTime.format("A")}</small>`;

  let tehranElement = document.querySelector("#tehran");
  let tehranDateElement = tehranElement.querySelector(".date");
  let tehranTimeElement = tehranElement.querySelector(".time");

  let tehranTime = moment().tz("Asia/Tehran");

  tehranDateElement.innerHTML = tehranTime.format("MMMM Do YYYY");
  tehranTimeElement.innerHTML = `${tehranTime.format(
    "h:mm:ss"
  )} <small>${tehranTime.format("A")}</small>`;
}
update();
setInterval(update, 1000);

function updateCity(event) {
  let CityTimeZone = event.target.value;
  let cityName = CityTimeZone.split("/")[1];
  let cityTime = moment().tz(CityTimeZone);
  let citesElement = document.querySelector("#cites");
  citesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}  </div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")} </small></div>
        </div>`;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
