function subjectfontSize() {
  //字体大小
  subject.style.fontSize = window.innerWidth / 80 + "px";
}
function LoadingIconSize() {
  //Loading图大小
  var LoadingIcon = document.getElementsByClassName("LoadingIcon");
  var size = window.innerWidth / 100 + "px";
  for (let index = 0; index < LoadingIcon.length; index++) {
    LoadingIcon[index].style.borderWidth = size;
  }
  return size;
}
function Initial_loading() {
  //游戏前设置
  const subject = document.getElementById("subject");
  const GameName = document.getElementById("game_title").innerHTML;
  const VERSION = "Pre-alpha 0.01"; //游戏版本
  notification(
    "游戏版本",
    "<div style='text-align: center'>" + VERSION + "</div>",
    "bottom",
    0,
    "2s",
    "wait"
  );

  subjectfontSize();
  LoadingIconSize();
  window.onresize = function () {
    subjectfontSize();
    LoadingIconSize();
  };

  //游戏界面设置
  subject.style.userSelect = "none";

  //键盘检测
  window.onkeydown = function (event) {
    Operate(event.key.toLowerCase());
    console.log("keyboard " + event.key.toLowerCase());
  };

  //新增快捷栏
  var menu = document.getElementById("ls-m-home");
  let new_menu = document.createElement("span");
  new_menu.innerHTML = "查看版本";
  new_menu.setAttribute("class", "background");
  new_menu.onclick = function () {
    m_d_c_active();
    notification(
      "游戏版本",
      "<div style='text-align: center'>" + VERSION + "</div>",
      "bottom",
      0,
      "0.5s",
      "wait"
    );
  };
  menu.appendChild(new_menu);
  //快捷栏改正
  menu = menu.getElementsByClassName("background");
  for (let index = 0; index < menu.length; index++) {
    menu[index].style.margin = "0px 15px";
  }
}

//预加载图像
function Preload() {
  display_Loading = [];
  id = [];
  var scr = [];
  var caches = [];
  var params = getDefaultJSON("Player", "textures");
  var direction = ["top", "right", "bottom", "left"];
  for (var index = 0; index < params.length; index++) {
    //Player
    caches[0] = params[index]["textures"];
    caches[1] = params[index]["animation"]["move"];
    for (var i = 0; i < caches[1]; i++) {
      for (var a = 0; a < direction.length; a++) {
        id[id.length] = params[index]["id"];
        scr[scr.length] =
          "entity/player/" +
          params[index]["textures"] +
          "/" +
          direction[a] +
          "/" +
          direction[a] +
          "_" +
          i +
          ".png";
      }
    }
  }
  var list = ["block", "item", "particle"]; //其他
  for (var index = 0; index < list.length; index++) {
    var params = getDefaultJSON(list[index]);
    var caches = jsonObject(params);
    for (var i = 0; i < caches.length; i++) {
      if (!params[caches[i]]["textures"]) {
        id[id.length] = caches[i];
        scr[scr.length] = "block/" + caches[i] + ".png";
      } else {
        if (params[caches[i]]["textures"] != "null") {
          id[id.length] = caches[i];
          scr[scr.length] = "block/" + params[caches[i]]["textures"];
        }
      }
    }
  }
  for (let index = 0; index < id.length; index++) {
    let textures = new Image();
    textures.src = "textures/" + scr[index];
    textures.onload = function () {
      var text = "Loading complete > " + scr[index];
      display_Loading[display_Loading.length] = text;
      console.log(text);
      Loading("display");
      Home("Home");
    };
    textures.onerror = function () {
      var text = id[index] + " Loading > " + scr[index];
      display_Loading[display_Loading.length] = "Error > " + text;
      error(text);
      Loading("display");
    };
  }
}

//Error
function error(text) {
  notification(
    "<b style='color:darkred'>Error</b>",
    text,
    "left",
    100,
    "0.5s",
    "wait"
  );
  console.error("Error > " + text);
}

//玩家操作
function Operate(keydown) {
  if (keydown == "f11" || keydown == "escape") {
    if (!document.fullscreenElement) {
      subject.style.width = "";
      subject.style.margin = "";
    }
  }
  if (keydown == DefaultKeyDown["FullScreen"]) {
    if (!document.fullscreenElement) {
      document.getElementById("body").requestFullscreen();
      subject.style.width = "100%";
      subject.style.margin = "0px auto";
    } else {
      document.exitFullscreen();
      subject.style.width = "";
      subject.style.margin = "";
    }
  }
}

//主界面
function Home(params) {
  if (params == "Home") {
    if (!document.getElementById("Loading")) {
      Loading('<div class="display-Loading"></div>', "#131516");
      Preload();
      notification(
        "提醒",
        "若有开启插件请关闭以免影响游戏体验<br>破解复制类 'Dark Reader' 等插件",
        "top",
        500,
        "1s",
        "wait"
      );
    } else {
      if (id.length == display_Loading.length) {
        Map("MainInterface");
        setTimeout(function () {
          Loading("false");
        }, 1000);
      }
    }
  } else {
    Loading(subject.innerHTML, "#131516");
  }
}

//加载画面
function Loading(text, color) {
  if (text != "false") {
    if (text == "display") {
      var element = document.getElementsByClassName("display-Loading");
      for (let index = 0; index < element.length; index++) {
        element[index].innerHTML = display_Loading[display_Loading.length - 1];
      }
    } else {
      var LoadingElement = document.createElement("div");
      LoadingElement.setAttribute("id", "Loading");
      if (color) {
        LoadingElement.style.backgroundColor = color;
      }
      LoadingElement.innerHTML = text;
      LoadingElement.style.position = "absolute";
      LoadingElement.style.width = "100%";
      LoadingElement.style.height = "100%";
      LoadingElement.style.top = "0px";
      LoadingElement.style.left = "0px";
      LoadingElement.style.zIndex = "5";
      var LoadingAnimation = document.createElement("div");
      LoadingAnimation.setAttribute("class", "LoadingAnimation");
      LoadingAnimation.style.position = "absolute";
      LoadingAnimation.style.width = "7.5%";
      LoadingAnimation.style.display = "flex";
      LoadingAnimation.style.bottom = "2.5%";
      LoadingAnimation.style.right = "2.5%";
      LoadingAnimation.style.justifyContent = "center";
      LoadingAnimation.style.alignItems = "center";
      LoadingAnimation.style.transform = "translate(-50%,-50%)";
      var LoadingText = document.createElement("b");
      LoadingText.setAttribute("class", "LoadingText");
      LoadingText.style.margin = "0px auto";
      LoadingText.innerHTML = "Loading";
      var LoadingIcon = document.createElement("div");
      LoadingIcon.setAttribute("class", "LoadingIcon");
      LoadingIcon.style.position = "absolute";
      LoadingIcon.style.borderWidth = LoadingIconSize();
      LoadingAnimation.appendChild(LoadingText);
      LoadingAnimation.appendChild(LoadingIcon);
      if (document.getElementById("Loading")) {
        document.getElementById("Loading").appendChild(LoadingAnimation);
      } else {
        LoadingElement.appendChild(LoadingAnimation);
        subject.appendChild(LoadingElement);
      }
      setTimeout(function () {
        var LoadingAnimation =
          document.getElementsByClassName("LoadingAnimation");
        for (let index = 0; index < LoadingAnimation.length; index++) {
          LoadingAnimation[index].style.opacity = "1";
        }
      }, 500);
    }
  } else {
    var Loading = document.getElementById("Loading");
    var LoadingAnimation = document.getElementsByClassName("LoadingAnimation");
    var displayLoading = document.getElementsByClassName("display-Loading");
    for (let index = 0; index < LoadingAnimation.length; index++) {
      LoadingAnimation[index].style.opacity = "0";
    }
    for (let index = 0; index < displayLoading.length; index++) {
      displayLoading[index].style.transition = "0.5s";
      displayLoading[index].style.opacity = "0";
    }
    setTimeout(function () {
      Loading.style.opacity = "0";
      setTimeout(function () {
        Loading.remove();
      }, 2000);
    }, 1500);
  }
}

//加载地图
function Map(id) {
  for (let index = 0; index < map.length; index++) {
    if (map[index]["Id"] == id) {
      var Map = map[index]["Map"];
      break;
    }
  }
  if (!Map) {
    error("未知Map id > " + id);
  } else {
    function elementBlock(Map, length) {
      //加载材质等
      var element = document.createElement("span");
      element.setAttribute("tag", JSON.stringify(Map));
      element.style.aspectRatio = "1/1";
      element.style.margin = "-1px";
      element.style.width = 100 + "%";
      if (Map) {
        var list = ["textures", "rotate"];
        function random(params) {
          //random
          if (params == "rotate") {
            var params = Math.floor(Math.random() * 4);
            if (params == 0) {
              params = "0deg";
            } else {
              if (params == 1) {
                params = "90deg";
              } else {
                if (params == 2) {
                  params = "180deg";
                } else {
                  params = "270deg";
                }
              }
            }
          }
          return params;
        }
        for (let index = 0; index < list.length; index++) {
          if (Map[list[index]]) {
            //
            if (Map[list[index]] != null) {
              //
              if (index == 0) {
                element.style.backgroundImage =
                  "url(textures/block/" + Map[list[index]] + ")";
              } else {
                if (index == 1) {
                  if (Map[list[index]] == "random") {
                    element.style.transform =
                      "rotate(" + random("rotate") + ")";
                  }
                }
              }
            }
          } else {
            //
            var json = getDefaultJSON(
              "block",
              Map["block"] + "|" + list[index]
            );
            if (json) {
              //
              if (json != "null") {
                //
                if (index == 0) {
                  element.style.backgroundImage =
                    "url(textures/block/" + json + ")";
                }
                if (index == 1) {
                  if (json == "random") {
                    element.style.transform =
                      "rotate(" + random("rotate") + ")";
                  }
                }
              }
            } else {
              //
              if (index == 0) {
                element.style.backgroundImage =
                  "url(textures/block/" + Map["block"] + ".png)";
              }
            }
          }
        }
        element.style.backgroundRepeat = "no-repeat";
        if (Map["Size"]) {
          element.style.backgroundSize = Map["Size"];
        } else {
          element.style.backgroundSize = "100% 100%";
        }
        element.style.backgroundClip = "content-box";
        element.style.imageRendering = "pixelated";
        if (Map["superjacent"]) {
          element.appendChild(elementBlock(Map["superjacent"], length));
        }
      }
      return element;
    }
    var body_map = document.createElement("div");
    body_map.style.width = Map["size"] + "%";
    body_map.style.transform = "translate(-50%,-50%)";
    body_map.style.top = "50%";
    body_map.style.left = "50%";
    body_map.style.position = "absolute";
    for (var i = 1; i < Map["length"][0] + 1; i++) {
      var game_map = document.createElement("div");
      game_map.style.display = "flex";
      for (var index = 1; index < Map["length"][1] + 1; index++) {
        game_map.appendChild(elementBlock(Map[i][index], Map["length"]));
      }
      body_map.appendChild(game_map);
    }
    subject.appendChild(body_map);
  }
}

//游戏玩法
function GamePlay(params) {
  if (params == "RPG") {
  }
}
