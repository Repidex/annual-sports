var currentDateElement = document.getElementById("currentDate")
var currentDate = new Date().getFullYear()
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}
currentDateElement.textContent = currentDate

var currentDateElementFooter = document.getElementById("currentDateFooter")
var currentDateFooter = new Date().getFullYear()
var optionsFooter = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}
currentDateElement.textContent = currentDateFooter
