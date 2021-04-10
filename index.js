function cancel() {
  document.getElementById("form").reset();
  next0();
}
function next0() {
  document.getElementById("page1").style.display = "block";
  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "none";
  document.getElementById("bar").style.cssText =
    "transform: translate(0px); width: 160px;";
  document.getElementById("link1").style.cssText = "color: orange;";
  document.getElementById("link2").style.cssText = "color: #bdbdbd;";
  document.getElementById("link3").style.cssText = "color: #bdbdbd;";
}
function next1() {
  if (document.getElementById("email").value.length == 0) {
    alert("Please fill the required field to proceed");
    return false;
  } else {
    window.scrollTo(0, 0);
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    document.getElementById("page3").style.display = "none";
    document.getElementById("bar").style.cssText =
      "transform: translate(236px); width: 185px;";
    document.getElementById("link1").style.cssText = "color: #bdbdbd;";
    document.getElementById("link2").style.cssText = "color: orange;";
    document.getElementById("link3").style.cssText = "color: #bdbdbd;";
  }
}
function next2() {
  let pass = false;
  let num = document.getElementsByClassName("pg2-input");
  for (var i = 0; i < num.length; i++) {
    if (num[i].value.length == 0) {
      pass = false;
    } else {
      pass = true;
    }
  }
  if (pass === false) {
    alert("Please fill the required field to proceed");
  } else {
    window.scrollTo(0, 0);
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
    document.getElementById("bar").style.cssText =
      "transform: translate(500px); width: 210px;";
    document.getElementById("link1").style.cssText = "color: #bdbdbd;";
    document.getElementById("link2").style.cssText = "color: #bdbdbd;";
    document.getElementById("link3").style.cssText = "color: orange;";
  }
}
function pay() {
  window.scrollTo(0, 0);
  document.getElementById("field-cont").style.display = "none";
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "none";
  document.getElementById("page4").style.display = "block";
  document.getElementById("bar").style.cssText =
    "transform: translate(500px); width: 210px;";
  document.getElementById("link1").style.cssText = "color: #bdbdbd;";
  document.getElementById("link2").style.cssText = "color: #bdbdbd;";
  document.getElementById("link3").style.cssText = "color: orange;";
}
