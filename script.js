const yearSlider = document.getElementById("year");
const displayYear = document.getElementById("display-year");
const timeContent = document.getElementById("time-content");
yearSlider.addEventListener("input", () => {
  const selectedYear = yearSlider.value;
  displayYear.textContent = selectedYear;
  updateTimeContent(selectedYear);
});
function updateTimeContent(year) {
  let message;
  if (year < 2000) {
    message = `In ${year}, the world was embracing the 20th century. What major event do you remember?`;
  } else if (year >= 2000 && year <= 2024) {
    message = `In ${year}, technology and culture shaped our lives in ways unimaginable!`;}
     else {
    message = `In ${year}, the future is wide open! What could the world look like?`;}
  timeContent.innerHTML = `<p>${message}</p>`;}