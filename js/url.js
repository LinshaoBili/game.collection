const url = ["home", "about_web", "about_author"];
function url_get() {
  return window.location.href.split("?")[1];
}
function url_set(url) {
  window.location.href = window.location.href.split("?")[0] + "?" + url;
}
function url_r() {
  window.location.href = url_origin();
}
//自定义url开关
const url_switch = false;
try {
  if (Local("url_origin") == null) {
    Local_Save("url_origin", Switch);
  }
} catch (err) {
  Local_Save("url_origin", Switch);
}
var url_custom = "https://linshaobili.github.io/game.collection";
if (url_switch != false) {
  if (Local("url_origin") != url_custom) {
    Local_Save("url_origin", url_custom);
  }
}
function url_origin() {
  if (url_switch == false || Local("url_origin") == null) {
    var url = window.location.origin;
  } else {
    var url = Local("url_origin");
  }
  return url;
}
