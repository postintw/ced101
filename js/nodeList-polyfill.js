if (window.NodeList) {
  if (!NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  if (!NodeList.prototype.filter) {
    NodeList.prototype.filter = Array.prototype.filter;
  }
  if (!NodeList.prototype.map) {
    NodeList.prototype.map = Array.prototype.filter;
  }
}
