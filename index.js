

var captionDiv = document.getElementsByClassName("caption-div");
var imageDiv = document.getElementsByClassName("image-div");

const title = document.getElementById("bingo-title");
const captionR1C1 = document.getElementById("R1C1-span");
const captionR1C2 = document.getElementById("R1C2-span");
const captionR1C3 = document.getElementById("R1C3-span");
const captionR1C4 = document.getElementById("R1C4-span");
const captionR1C5 = document.getElementById("R1C5-span");
const captionR2C1 = document.getElementById("R2C1-span");
const captionR2C2 = document.getElementById("R2C2-span");
const captionR2C3 = document.getElementById("R2C3-span");
const captionR2C4 = document.getElementById("R2C4-span");
const captionR2C5 = document.getElementById("R2C5-span");
const captionR3C1 = document.getElementById("R3C1-span");
const captionR3C2 = document.getElementById("R3C2-span");
const captionR3C3 = document.getElementById("R3C3-span");
const captionR3C4 = document.getElementById("R3C4-span");
const captionR3C5 = document.getElementById("R3C5-span");
const captionR4C1 = document.getElementById("R4C1-span");
const captionR4C2 = document.getElementById("R4C2-span");
const captionR4C3 = document.getElementById("R4C3-span");
const captionR4C4 = document.getElementById("R4C4-span");
const captionR4C5 = document.getElementById("R4C5-span");
const captionR5C1 = document.getElementById("R5C1-span");
const captionR5C2 = document.getElementById("R5C2-span");
const captionR5C3 = document.getElementById("R5C3-span");
const captionR5C4 = document.getElementById("R5C4-span");
const captionR5C5 = document.getElementById("R5C5-span");

function handleCaptionCheckChange(src) {
  if (src.checked) {
    captionDiv[0].hidden = false;
    captionR1C1.textContent = "R1 C1";
    captionR1C2.textContent = "R1 C2";
    captionR1C3.textContent = "R1 C3";
    captionR1C4.textContent = "R1 C4";
    captionR1C5.textContent = "R1 C5";
    captionR2C1.textContent = "R2 C1";
    captionR2C2.textContent = "R2 C2";
    captionR2C3.textContent = "R2 C3";
    captionR2C4.textContent = "R2 C4";
    captionR2C5.textContent = "R2 C5";
    captionR3C1.textContent = "R3 C1";
    captionR3C2.textContent = "R3 C2";
    captionR3C3.textContent = "R3 C3";
    captionR3C4.textContent = "R3 C4";
    captionR3C5.textContent = "R3 C5";
    captionR4C1.textContent = "R4 C1";
    captionR4C2.textContent = "R4 C2";
    captionR4C3.textContent = "R4 C3";
    captionR4C4.textContent = "R4 C4";
    captionR4C5.textContent = "R4 C5";
    captionR5C1.textContent = "R5 C1";
    captionR5C2.textContent = "R5 C2";
    captionR5C3.textContent = "R5 C3";
    captionR5C4.textContent = "R5 C4";
    captionR5C5.textContent = "R5 C5";
  } else if (!src.checked) {
    captionDiv[0].hidden = true;
    captionR1C1.textContent = "";
    captionR1C2.textContent = "";
    captionR1C3.textContent = "";
    captionR1C4.textContent = "";
    captionR1C5.textContent = "";
    captionR2C1.textContent = "";
    captionR2C2.textContent = "";
    captionR2C3.textContent = "";
    captionR2C4.textContent = "";
    captionR2C5.textContent = "";
    captionR3C1.textContent = "";
    captionR3C2.textContent = "";
    captionR3C3.textContent = "";
    captionR3C4.textContent = "";
    captionR3C5.textContent = "";
    captionR4C1.textContent = "";
    captionR4C2.textContent = "";
    captionR4C3.textContent = "";
    captionR4C4.textContent = "";
    captionR4C5.textContent = "";
    captionR5C1.textContent = "";
    captionR5C2.textContent = "";
    captionR5C3.textContent = "";
    captionR5C4.textContent = "";
    captionR5C5.textContent = "";
  }
}

function handleImageCheckChange(src) {
  let bingoTableTd = document.querySelectorAll(".bingo-table td");    

  bingoTableTd.forEach(td => {  
    if (src.checked) {
      imageDiv[0].hidden = false;
      td.style.verticalAlign = "bottom";
      td.style.fontSize = "18px"
    } else if (!src.checked) {
      if (td.children[0].localName == "img") {
        td.removeChild(td.children[0])
      }
      imageDiv[0].hidden = true;
      td.style.verticalAlign = "inherit";
      td.style.fontSize = "32px"
    }
  });

}
 
function handleTextCaptionChange(src) {
  switch (src.labels[0].textContent) {
    case "Title: ":
      title.textContent = src.value;
      break;
    case "R1 C1":
      captionR1C1.textContent = src.value;
      break;
    case "R1 C2":
      captionR1C2.textContent = src.value;
      break;
    case "R1 C3":
      captionR1C3.textContent = src.value;
      break;
    case "R1 C4":
      captionR1C4.textContent = src.value;
      break;
    case "R1 C5":
      captionR1C5.textContent = src.value;
      break;
    case "R2 C1":
      captionR2C1.textContent = src.value;
      break;
    case "R2 C2":
      captionR2C2.textContent = src.value;
      break;
    case "R2 C3":
      captionR2C3.textContent = src.value;
      break;
    case "R2 C4":
      captionR2C4.textContent = src.value;
      break;
    case "R2 C5":
      captionR2C5.textContent = src.value;
      break;
    case "R3 C1":
      captionR3C1.textContent = src.value;
      break;
    case "R3 C2":
      captionR3C2.textContent = src.value;
      break;
    case "R3 C3":
      captionR3C3.textContent = src.value;
      break;
    case "R3 C4":
      captionR3C4.textContent = src.value;
      break;
    case "R3 C5":
      captionR3C5.textContent = src.value;
      break;
    case "R4 C1":
      captionR4C1.textContent = src.value;
      break;
    case "R4 C2":
      captionR4C2.textContent = src.value;
      break;
    case "R4 C3":
      captionR4C3.textContent = src.value;
      break;
    case "R4 C4":
      captionR4C4.textContent = src.value;
      break;
    case "R4 C5":
      captionR4C5.textContent = src.value;
      break;
    case "R5 C1":
      captionR5C1.textContent = src.value;
      break;
    case "R5 C2":
      captionR5C2.textContent = src.value;
      break;
    case "R5 C3":
      captionR5C3.textContent = src.value;
      break;
    case "R5 C4":
      captionR5C4.textContent = src.value;
      break;
    case "R5 C5":
      captionR5C5.textContent = src.value;
      break;
    default:
      break;
  }
}

function handleUploadImageChange(src) {
  let bingoTableTd = document.querySelectorAll(".bingo-table td");    
  let bingoImgUrl = URL.createObjectURL(src.files[0]);
  let img = document.createElement("img");

  img.src = bingoImgUrl;

  switch (src.labels[0].textContent) {
    case "R1 C1":
      if (bingoTableTd[0].children[0].localName == "img") {
        bingoTableTd[0].replaceChild(img,bingoTableTd[0].children[0])
      }
      else {
        bingoTableTd[0].prepend(img);
      }
      break;
    case "R1 C2":
      if (bingoTableTd[1].children[0].localName == "img") {
        bingoTableTd[1].replaceChild(img,bingoTableTd[1].children[0])
      }
      else {
        bingoTableTd[1].prepend(img);
      }
      break;
    case "R1 C3":
      if (bingoTableTd[2].children[0].localName == "img") {
        bingoTableTd[2].replaceChild(img,bingoTableTd[2].children[0])
      }
      else {
        bingoTableTd[2].prepend(img);
      }
      break;
    case "R1 C4":
      if (bingoTableTd[3].children[0].localName == "img") {
        bingoTableTd[3].replaceChild(img,bingoTableTd[3].children[0])
      }
      else {
        bingoTableTd[3].prepend(img);
      }
      break;
    case "R1 C5":
      if (bingoTableTd[4].children[0].localName == "img") {
        bingoTableTd[4].replaceChild(img,bingoTableTd[4].children[0])
      }
      else {
        bingoTableTd[4].prepend(img);
      }
      break;
    case "R2 C1":
      if (bingoTableTd[5].children[0].localName == "img") {
        bingoTableTd[5].replaceChild(img,bingoTableTd[5].children[0])
      }
      else {
        bingoTableTd[5].prepend(img);
      }
      break;
    case "R2 C2":
      if (bingoTableTd[6].children[0].localName == "img") {
        bingoTableTd[6].replaceChild(img,bingoTableTd[6].children[0])
      }
      else {
        bingoTableTd[6].prepend(img);
      }
      break;
    case "R2 C3":
      if (bingoTableTd[7].children[0].localName == "img") {
        bingoTableTd[7].replaceChild(img,bingoTableTd[7].children[0])
      }
      else {
        bingoTableTd[7].prepend(img);
      }
      break;
    case "R2 C4":
      if (bingoTableTd[8].children[0].localName == "img") {
        bingoTableTd[8].replaceChild(img,bingoTableTd[8].children[0])
      }
      else {
        bingoTableTd[8].prepend(img);
      }
      break;
    case "R2 C5":
      if (bingoTableTd[9].children[0].localName == "img") {
        bingoTableTd[9].replaceChild(img,bingoTableTd[9].children[0])
      }
      else {
        bingoTableTd[9].prepend(img);
      }
      break;
    case "R3 C1":
      if (bingoTableTd[10].children[0].localName == "img") {
        bingoTableTd[10].replaceChild(img,bingoTableTd[10].children[0])
      }
      else {
        bingoTableTd[10].prepend(img);
      }
      break;
    case "R3 C2":
      if (bingoTableTd[11].children[0].localName == "img") {
        bingoTableTd[11].replaceChild(img,bingoTableTd[11].children[0])
      }
      else {
        bingoTableTd[11].prepend(img);
      }
      break;
    case "R3 C3":
      if (bingoTableTd[12].children[0].localName == "img") {
        bingoTableTd[12].replaceChild(img,bingoTableTd[12].children[0])
      }
      else {
        bingoTableTd[12].prepend(img);
      }
      break;
    case "R3 C4":
      if (bingoTableTd[13].children[0].localName == "img") {
        bingoTableTd[13].replaceChild(img,bingoTableTd[13].children[0])
      }
      else {
        bingoTableTd[13].prepend(img);
      }
      break;
    case "R3 C5":
      if (bingoTableTd[14].children[0].localName == "img") {
        bingoTableTd[14].replaceChild(img,bingoTableTd[14].children[0])
      }
      else {
        bingoTableTd[14].prepend(img);
      }
      break;
    case "R4 C1":
      if (bingoTableTd[15].children[0].localName == "img") {
        bingoTableTd[15].replaceChild(img,bingoTableTd[15].children[0])
      }
      else {
        bingoTableTd[15].prepend(img);
      }
      break;
    case "R4 C2":
      if (bingoTableTd[16].children[0].localName == "img") {
        bingoTableTd[16].replaceChild(img,bingoTableTd[16].children[0])
      }
      else {
        bingoTableTd[16].prepend(img);
      }
      break;
    case "R4 C3":
      if (bingoTableTd[17].children[0].localName == "img") {
        bingoTableTd[17].replaceChild(img,bingoTableTd[17].children[0])
      }
      else {
        bingoTableTd[17].prepend(img);
      }
      break;
    case "R4 C4":
      if (bingoTableTd[18].children[0].localName == "img") {
        bingoTableTd[18].replaceChild(img,bingoTableTd[18].children[0])
      }
      else {
        bingoTableTd[18].prepend(img);
      }
      break;
    case "R4 C5":
      if (bingoTableTd[19].children[0].localName == "img") {
        bingoTableTd[19].replaceChild(img,bingoTableTd[19].children[0])
      }
      else {
        bingoTableTd[19].prepend(img);
      }
      break;
    case "R5 C1":
      if (bingoTableTd[20].children[0].localName == "img") {
        bingoTableTd[20].replaceChild(img,bingoTableTd[20].children[0])
      }
      else {
        bingoTableTd[20].prepend(img);
      }
      break;
    case "R5 C2":
      if (bingoTableTd[21].children[0].localName == "img") {
        bingoTableTd[21].replaceChild(img,bingoTableTd[21].children[0])
      }
      else {
        bingoTableTd[21].prepend(img);
      }
      break;
    case "R5 C3":
      if (bingoTableTd[22].children[0].localName == "img") {
        bingoTableTd[22].replaceChild(img,bingoTableTd[22].children[0])
      }
      else {
        bingoTableTd[22].prepend(img);
      }
      break;
    case "R5 C4":
      if (bingoTableTd[23].children[0].localName == "img") {
        bingoTableTd[23].replaceChild(img,bingoTableTd[23].children[0])
      }
      else {
        bingoTableTd[23].prepend(img);
      }
      break;
    case "R5 C5":
      if (bingoTableTd[24].children[0].localName == "img") {
        bingoTableTd[24].replaceChild(img,bingoTableTd[24].children[0])
      }
      else {
        bingoTableTd[24].prepend(img);
      }
      break;
    default:
      break;
  }
}


function downloadBingo() {
  console.log("Click");
  let bingoDivData = document.getElementsByClassName('bingo-div');
  console.log(bingoDivData);

  html2canvas(bingoDivData[0], { 
    useCors:true,
    allowTaint:true,
    onrendered: function(canvas) {
      var myImage = canvas.toDataURL("image/png");
      downloadURI("data:" + myImage, title.textContent + ".png");
    }
  })
}

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}