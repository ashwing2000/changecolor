index = 0;

function changeColor() {
  var colors = ["red", "blue", "orange", "green", "yellow", "voilet", "purple"];
  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if (index > colors.length - 1) index = 0;
}
