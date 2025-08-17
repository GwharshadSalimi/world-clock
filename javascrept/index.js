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
