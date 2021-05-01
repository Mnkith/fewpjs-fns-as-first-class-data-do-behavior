/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);
function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

function greet(timeStr) {
  const hours = parseInt(timeStr.split(":")[0]);
  switch (true) {
    case hours < 12:
      return "Good Morning";
    case hours > 17:
      return "Good Evening";
    default:
      return "Good Afternoon";
  }
}

function displayMessage(timeString) {
  document.querySelector("h1#greeting").innerText = timeString;
}
