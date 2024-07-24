function Local(Name) {
  return localStorage.getItem(Name);
}
function Local_Save(Name, Variable) {
  if (Name == "clear") {
    localStorage.clear();
    console.log("Local.Clear.Complete");
  } else {
    if (
      Variable == null ||
      Variable == "clear" ||
      Variable == "c" ||
      Variable == undefined
    ) {
      localStorage.removeItem(Name);
    } else {
      localStorage.setItem(Name, Variable);
    }
  }
}
function split_text(text, split, want) {
  return text.split(split)[want];
}

//弹窗[标题(可HTML),内容(可HTML),进入方式(top,left,right,bottom),等待进入时间(1s=1000),动画时间(CSS transition),关闭方式(等待 wait,点击 button)]
function notification(title, text, position, time, transition, close) {
  var popup = document.createElement("div");
  var popup_id = "popup" + Math.floor(Math.random() * 1145141919810);
  popup.setAttribute("id", popup_id);
  popup.style.position = "absolute";
  popup.style.padding = "5px 25px 10px 25px";
  popup.style.zIndex = 10;
  popup.style.opacity = 1;
  popup.style.width = "25%";
  popup.style.maxWidth = "500px";
  popup.style.backgroundColor = "#00000050";
  popup.style.transform = "translate(0%,0%)";
  popup.style.transition = transition;
  var html_title = document.createElement("div");
  html_title.setAttribute("class", "title");
  html_title.innerHTML = title;
  html_title.style.textAlign = "center";
  popup.appendChild(html_title);
  popup.innerHTML += text;
  if (position == "left") {
    popup.style.top = "35%";
    popup.style.left = "-50%";
  } else {
    if (position == "right") {
      popup.style.top = "35%";
      popup.style.right = "-50%";
    } else {
      if (position == "bottom") {
        popup.style.transform = "translate(-50%,0%)";
        popup.style.bottom = "-50%";
        popup.style.left = "50%";
      } else {
        var position = "top";
        popup.style.transform = "translate(-50%,0%)";
        popup.style.top = "-50%";
        popup.style.left = "50%";
      }
    }
  }
  popup.setAttribute("tag", position);
  document.getElementById("pop-up").appendChild(popup);
  transition = Number(transition.split("s")[0] + "000");
  var popup = document.getElementById(popup_id);
  function popup_close() {
    popup.style.opacity = 0;
    setTimeout(function () {
      popup.remove();
    }, 1000);
  }
  //关闭方式
  if (close == "wait") {
    setTimeout(function () {
      popup_close();
    }, transition + 3000);
  } else {
    if (close == "button") {
      popup.innerHTML += "<br>";
      var button = document.createElement("div");
      button.innerHTML = "关闭";
      button.style.userSelect = "none";
      button.style.textAlign = "center";
      button.style.width = "50px";
      button.style.margin = "0px auto";
      button.style.padding = "2.5px 20px";
      button.style.backgroundColor = "#00000050";
      button.style.borderRadius = "20px";
      button.onclick = function () {
        popup_close();
      };
      popup.appendChild(button);
    }
  }
  //等待进入时间
  popup.onload = setTimeout(function () {
    if (position == "left") {
      popup.style.left = "0";
    } else {
      if (position == "right") {
        popup.style.right = "0";
      } else {
        if (position == "bottom") {
          popup.style.bottom = "0";
        } else {
          if (position == "top") {
            popup.style.top = "0";
          }
        }
      }
    }
  }, time);
}
