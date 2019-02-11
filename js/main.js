/* Variables to store all the elements*/
var pyModal = document.getElementById('pyModal');
var javaModal = document.getElementById('javaModal');
var cModal = document.getElementById('cModal');
var cppModal = document.getElementById('cppModal');

var pyBtn = document.getElementById('python');
var jBtn = document.getElementById('java');
var cBtn = document.getElementById('c');
var cppBtn = document.getElementById('c++');

var pyClose = document.getElementsByClassName("close")[0];
var javaClose = document.getElementsByClassName("close")[1];
var cClose = document.getElementsByClassName("close")[2];
var cppClose = document.getElementsByClassName("close")[3];
/* https://stackoverflow.com/questions/1199352/smart-way-to-shorten-long-strings-with-javascript */
/* This truc function was suggested by user "KooiInc" on StackOverflow */
String.prototype.trunc =
  function (n, useWordBoundary) {
    if (this.length <= n) {
      return this;
    }
    var subString = this.substr(0, n - 1);
    return (useWordBoundary ?
      subString.substr(0, subString.lastIndexOf(' ')) :
      subString) + "&hellip;";
  };
/* End of cited code */
var pyPre = document.getElementsByClassName("pyText")[0].textContent;
document.getElementById("pyPreview").innerHTML = pyPre.trunc(300, true);
var javaPre = document.getElementsByClassName("javaText")[0].textContent;
document.getElementById("javaPreview").innerHTML = javaPre.trunc(300, true);
var cPre = document.getElementsByClassName("cText")[0].textContent;
document.getElementById("cPreview").innerHTML = cPre.trunc(300, true);
var cppPre = document.getElementsByClassName("c++Text")[0].textContent;
document.getElementById("c++Preview").innerHTML = cppPre.trunc(300, true);

/* On click functions to open the modal */
pyBtn.onclick = function () {
  pyModal.style.display = "block";
};
jBtn.onclick = function () {
  javaModal.style.display = "block";
};
cBtn.onclick = function () {
  cModal.style.display = "block";
};
cppBtn.onclick = function () {
  cppModal.style.display = "block";
};
/* Closing functions the use the "x" to click. */
pyClose.onclick = function () {
  pyModal.style.display = "none";
  javaModal.style.display = "none";
  cModal.style.display = "none";
  cppModal.style.display = "none";
};
javaClose.onclick = function () {
  javaModal.style.display = "none";
};
cClose.onclick = function () {
  cModal.style.display = "none";
};
cppClose.onclick = function () {
  cppModal.style.display = "none";
};
/* Clicking anywhere outside the modal will also close it. */
window.onclick = function (event) {
  if (event.target === pyModal) {
    pyModal.style.display = "none";
  }
  if (event.target === javaModal) {
    javaModal.style.display = "none";
  }
  if (event.target === cModal) {
    cModal.style.display = "none";
  }
  if (event.target === cppModal) {
    cppModal.style.display = "none";
  }
};
