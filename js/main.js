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
