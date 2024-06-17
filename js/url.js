const url = ["home", "about_web", "about_author"];
function url_get() {
  return window.location.href.split("?")[1];
}
function url_set(url) {
  window.location.href = window.location.href.split("?")[0] + "?" + url;
}
function url_r() {
  window.location.href = window.location.origin;
}