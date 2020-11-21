var homebutt = document.body.querySelector(".homebutt");
var gradebutt = document.body.querySelector(".gradebutt");
var viewbutt = document.body.querySelector(".viewbutt");
var userEle = document.body.querySelector(".user");
var passEle = document.body.querySelector(".pass");
var contentEle = document.body.querySelector(".content");
var sub = document.body.querySelector(".submit");
var messagebox = document.body.querySelector(".message");
var grade = document.body.querySelector(".grade");
var nme = document.body.querySelector(".name");
var sub2 = document.body.querySelector(".submit2");
var list = [];

grade.style.visibility = "hidden";
nme.style.visibility = "hidden";
sub2.style.visibility = "hidden";

function rendergrade() {
  document.body.querySelector(".list").innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    var itmEle = document.createElement("h6");
    itmEle.innerHTML = list[i].name;
    document.body.querySelector(".list").appendChild(itmEle);
  }
}

function rendergradev() {
  messagebox.innerHTML = "";
  grade.style.visibility = "hidden";
  nme.style.visibility = "hidden";
  sub2.style.visibility = "hidden";
  if (nme.value && grade.value) {
  list.push({
  name: nme.value});
  list.push({
  name: grade.value
  });
  rendergrade();
}
}

function rendergrade2() {
  messagebox.innerHTML = "";
  grade.style.visibility = "visible";
  nme.style.visibility = "visible";
  sub2.style.visibility = "visible";
}

function renderhome() {
  messagebox.innerHTML = "";
  homebutt.style.visibility = "visible";
  viewbutt.style.visibility = "visible";
  gradebutt.style.visibility = "visible";
  userEle.style.visibility = "hidden";
  passEle.style.visibility = "hidden";
  sub.style.visibility = "hidden";
  grade.style.visibility = "hidden";
  nme.style.visibility = "hidden";
  sub2.style.visibility = "hidden";
}

homebutt.style.visibility = "hidden";
viewbutt.style.visibility = "hidden";
gradebutt.style.visibility = "hidden";

document.body.querySelector(".submit").addEventListener("click", function () {
  messagebox.innerHTML = "";
  if (userEle.value == "cool" && passEle.value == "password") {
    renderhome();
  } else {
    messagebox.innerHTML = "Incorrect Username or Password";
  }
});
document.body.querySelector(".gradebutt").addEventListener("click", function () {
    rendergrade2();
  });
document.body.querySelector(".homebutt").addEventListener("click", function () {
  renderhome();
});
document.body.querySelector(".viewbutt").addEventListener("click", function () {
  rendergradev();
});
document.body.querySelector(".submit2").addEventListener("click", function () {
  if (nme.value && grade.value == !isNaN()) {
  } else {
    messagebox.innerHTML = "Did not enter name or grade";
  }
});