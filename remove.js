(function removeyt() {
  var header = document.getElementById('sections'); //제거하고자 하는 엘리먼트
  header.parentNode.removeChild(header);
})();
window.onload = removeyt;
