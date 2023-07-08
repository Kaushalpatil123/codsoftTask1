function buttonClick1() {
  if (!buttonClick1.hasOwnProperty("clickCount")) {
    buttonClick1.clickCount = 0;
  }

  buttonClick1.clickCount++;
  const content = document.getElementById("contentid1");
  const cross = document.getElementById("btncross1");
  if (buttonClick1.clickCount % 2 === 1) {
    content.className = "showcontainer1";
    cross.className = "que1-img";
  } else {
    cross.className = "que1-imgs";
    content.className = "content1";
  }
}

function buttonClick2() {
  if (!buttonClick2.hasOwnProperty("clickCount")) {
    buttonClick2.clickCount = 0;
  }

  buttonClick2.clickCount++;
  const content = document.getElementById("contentid2");
  const cross = document.getElementById("btncross2");
  if (buttonClick2.clickCount % 2 === 1) {
    content.className = "showcontainer2";
    cross.className = "que2-img";
  } else {
    cross.className = "que2-imgs";
    content.className = "content2";
  }
}

function buttonClick3() {
  if (!buttonClick3.hasOwnProperty("clickCount")) {
    buttonClick3.clickCount = 0;
  }

  buttonClick3.clickCount++;
  const content = document.getElementById("contentid3");
  const cross = document.getElementById("btncross3");
  if (buttonClick3.clickCount % 2 === 1) {
    content.className = "showcontainer3";
    cross.className = "que3-img";
  } else {
    cross.className = "que3-imgs";
    content.className = "content3";
  }
}

function buttonClick4() {
  if (!buttonClick4.hasOwnProperty("clickCount")) {
    buttonClick4.clickCount = 0;
  }

  buttonClick4.clickCount++;
  const content = document.getElementById("contentid4");
  const cross = document.getElementById("btncross4");
  if (buttonClick4.clickCount % 2 === 1) {
    content.className = "showcontainer4";
    cross.className = "que4-img";
  } else {
    cross.className = "que4-imgs";
    content.className = "content4";
  }
}

function buttonClick5() {
  if (!buttonClick5.hasOwnProperty("clickCount")) {
    buttonClick5.clickCount = 0;
  }

  buttonClick5.clickCount++;
  const content = document.getElementById("contentid5");
  const cross = document.getElementById("btncross5");
  if (buttonClick5.clickCount % 2 === 1) {
    content.className = "showcontainer5";
    cross.className = "que5-img";
  } else {
    cross.className = "que5-imgs";
    content.className = "content5";
  }
}

function buttonClick6() {
  if (!buttonClick6.hasOwnProperty("clickCount")) {
    buttonClick6.clickCount = 0;
  }

  buttonClick6.clickCount++;
  const content = document.getElementById("contentid6");
  const cross = document.getElementById("btncross6");
  if (buttonClick6.clickCount % 2 === 1) {
    content.className = "showcontainer6";
    cross.className = "que6-img";
  } else {
    cross.className = "que6-imgs";
    content.className = "content6";
  }
}

function completesignin() {
  alert("Login Successful");
  window.location.href = "https://kaushalpatil123.github.io/codsoftTask1/";
}
