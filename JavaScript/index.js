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

  let itemR1 = rArray[0];
  if (itemR1 === "10") {
    itemR1 = "A";
    console.log(itemR1);
  } else if (itemR1 === "11") {
    itemR1 = "B";
    console.log(itemR1);
  } else if (itemR1 === "12") {
    itemR1 = "C";
    console.log(itemR1);
  } else if (itemR1 === "13") {
    itemR1 = "D";
    console.log(itemR1);
  } else if (itemR1 === "14") {
    itemR1 = "E";
    console.log(itemR1);
  } else if (itemR1 === "15") {
    itemR1 = "F";
    console.log(itemR1);
  } else {
    console.log(itemR1);
  }
  let itemR2 = rArray[1];
  if (itemR2 == "10") {
    itemR2 = "A";
    console.log(itemR2);
  } else if (itemR2 == "11") {
    itemR2 = "B";
    console.log(itemR2);
  } else if (itemR2 == "12") {
    itemR2 = "C";
    console.log(itemR2);
  } else if (itemR2 == "13") {
    itemR2 = "D";
    console.log(itemR2);
  } else if (itemR2 == "14") {
    itemR2 = "E";
    console.log(itemR2);
  } else if (itemR2 == "15") {
    itemR2 = "F";
    console.log(itemR2);
  } else {
    console.log(itemR2);
  }
  let itemG1 = gArray[0];
  if (itemG1 === "10") {
    itemG1 = "A";
    console.log(itemG1);
  } else if (itemG1 === "11") {
    itemG1 = "B";
    console.log(itemG1);
  } else if (itemG1 === "12") {
    itemG1 = "C";
    console.log(itemG1);
  } else if (itemG1 === "13") {
    itemG1 = "D";
    console.log(itemG1);
  } else if (itemG1 === "14") {
    itemG1 = "E";
    console.log(itemG1);
  } else if (itemG1 === "15") {
    itemG1 = "F";
    console.log(itemG1);
  } else {
    console.log(itemG1);
  }
  let itemG2 = gArray[1];
  if (itemG2 == "10") {
    itemG2 = "A";
    console.log(itemG2);
  } else if (itemG2 == "11") {
    itemG2 = "B";
    console.log(itemG2);
  } else if (itemG2 == "12") {
    itemG2 = "C";
    console.log(itemG2);
  } else if (itemG2 == "13") {
    itemG2 = "D";
    console.log(itemG2);
  } else if (itemG2 == "14") {
    itemG2 = "E";
    console.log(itemG2);
  } else if (itemG2 == "15") {
    itemG2 = "F";
    console.log(itemG2);
  } else {
    console.log(itemG2);
  }
  let itemB1 = bArray[0];
  if (itemB1 === "10") {
    itemB1 = "A";
    console.log(itemB1);
  } else if (itemB1 === "11") {
    itemB1 = "B";
    console.log(itemB1);
  } else if (itemB1 === "12") {
    itemB1 = "C";
    console.log(itemB1);
  } else if (itemB1 === "13") {
    itemB1 = "D";
    console.log(itemB1);
  } else if (itemB1 === "14") {
    itemB1 = "E";
    console.log(itemB1);
  } else if (itemB1 === "15") {
    itemB1 = "F";
    console.log(itemB1);
  } else {
    console.log(itemB1);
  }
  let itemB2 = bArray[1];
  if (itemB2 == "10") {
    itemB2 = "A";
    console.log(itemB2);
  } else if (itemB2 == "11") {
    itemB2 = "B";
    console.log(itemB2);
  } else if (itemB2 == "12") {
    itemB2 = "C";
    console.log(itemB2);
  } else if (itemB2 == "13") {
    itemB2 = "D";
    console.log(itemB2);
  } else if (itemB2 == "14") {
    itemB2 = "E";
    console.log(itemB2);
  } else if (itemB2 == "15") {
    itemB2 = "F";
    console.log(itemB2);
  } else {
    console.log(itemB2);
  }
  document.querySelector(
    ".colorOut"
  ).innerText = `The HEX value for the RBG value of (${red},${green},${blue},) is #${itemR1}${itemR2}${itemG1}${itemG2}${itemB1}${itemB2}.`;
  hexBackground = `#${itemR1}${itemR2}${itemG1}${itemG2}${itemB1}${itemB2}`;
  console.log(hexBackground);
  document.querySelector(".color").style.backgroundColor = hexBackground;
}
let colorOut = document.querySelector("input");
colorOut.addEventListener("change", () => convertToHex());
