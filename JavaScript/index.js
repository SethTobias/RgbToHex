function convertToHex() {
  let input = document.querySelector("input").value;
  let rgbInputs = input.split(",");
  console.log(rgbInputs);
  let red = parseInt(rgbInputs[0]);
  let green = parseInt(rgbInputs[1]);
  let blue = parseInt(rgbInputs[2]);
  let r = parseInt(red / 16) + "," + (red % 16).toString();
  let g = parseInt(green / 16) + "," + (green % 16).toString();
  let b = parseInt(blue / 16) + "," + (blue % 16).toString();
  let rArray = r.split(",");
  let gArray = g.split(",");
  let bArray = b.split(",");
  let rHex = [parseInt(rArray[0]), parseInt(rArray[1])];
  let gHex = [parseInt(gArray[0]), parseInt(gArray[1])];
  let bHex = [parseInt(bArray[0]), parseInt(bArray[1])];
  let item = rHex[0];
  if (item == 10) {
    item = "A";
  } else if (item == 11) {
    item = "B";
  } else if (item == 12) {
    item = "C";
  } else if (item == 13) {
    item = "D";
  } else if (item == 14) {
    item = "E";
  } else {
    item = "F";
  }
  console.log(rArray);
  console.log(rHex);
  console.log(gHex);
  console.log(bHex);
}
let colorOut = document.querySelector("input");
colorOut.addEventListener("change", () => convertToHex());
