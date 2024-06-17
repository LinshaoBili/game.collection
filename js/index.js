const game_list = ["Slang.Adventure"];
const loading = document.createElement("div");
let loading_t1 = document.createElement("p");
let loading_t2 = document.createElement("p");
let loading_t3 = document.createElement("a");
loading_t1.innerHTML = "加载中";
loading_t2.innerHTML = "长时间处于此界面 请检查网络或者网页链接";
loading_t3.innerHTML = "原链接";
loading_t1.style.fontSize = "25px";
loading_t2.style.fontSize = "15px";
loading_t3.style.color = "#0a6796";
loading_t3.setAttribute("href", window.location.origin);
loading.appendChild(loading_t1);
loading.appendChild(loading_t2);
loading.appendChild(loading_t3);
function loading_append() {
  let homepage = document.getElementById("homepage");
  homepage.innerHTML = "";
  homepage.appendChild(loading);
}
function where() {
  function update_homepage(name) {
    let homepage = document.getElementById("homepage");
    console.log("loading '" + name + "'");
    homepage.style.display = "block";
    function h_title(text) {
      homepage.innerHTML = "";
      let title = document.createElement("div");
      title.innerHTML = text;
      title.style.textAlign = "center";
      title.style.fontSize = "25px";
      title.style.paddingBottom = "15px";
      homepage.appendChild(title);
    }

    //home
    if (name == url[0]) {
      homepage.style.display = "grid";
      let fr = "";
      let list_max = 4;
      if (game_list.length < list_max) {
        var list = game_list.length;
      } else {
        var list = list_max;
      }
      for (let index = 0; index < list; index++) {
        fr = fr + "1fr ";
      }
      homepage.style.gridTemplateColumns = fr;
      for (let index = 0; index < game_list.length; index++) {
        let game = document.createElement("a"); //<a>
        game.setAttribute("class", "h-g-a");
        game.href = window.location.origin + "/game/" + game_list[index];
        let logo = document.createElement("div"); //<div>
        logo.setAttribute("class", "h-g-div");
        logo.tagName = game_list[index];
        logo.style.backgroundImage =
          "url('" +
          window.location.origin +
          "/game/" +
          game_list[index] +
          "/" +
          game_list[index] +
          ".png')";
        let title = document.createElement("p"); //<p>
        title.setAttribute("class", "h-g-p");
        title.innerHTML = game_list[index];
        h_title(split_text(Name[0], "/", 1) + "制作的小游戏");
        game.appendChild(logo);
        game.appendChild(title);
        homepage.appendChild(game);
      }
    }

    //about_web
    if (name == url[1]) {
      let text = document.createElement("p");
      text.innerHTML =
        '亲爱的访客您好<br>本网由 <a class="can_click" onclick="url_set(url[2])">' +
        split_text(Name[0], "/", 1) +
        '</a> 制作<br>本网不存在任何形式的收益<br>发现bug可通过 linshaooh@foxmail.com 反馈<br><br><p style="color:#131516">做着玩的()</p>感谢浏览！';
      h_title("关于本网");
      homepage.appendChild(text);
    }

    //about_author
    if (name == url[2]) {
      let text = document.createElement("p");
      text.innerHTML =
        split_text(Name[0], "/", 1) +
        '的<a class="can_click" href="https://space.bilibili.com/' +
        split_text(Name[0], "/", 2) +
        '">Bilibili</a>';
      h_title("关于" + split_text(Name[0], "/", 1));
      homepage.appendChild(text);
    }
  }

  //其他处理
  function prev() {
    Local_Save("prev_css", document.getElementById("homepage").style.cssText);
    Local_Save("prev", document.getElementById("homepage").innerHTML);
  }
  //加载过渡动画
  if (Local("prev") != null) {
    let prev = document.getElementById("prev");
    prev.style.cssText = Local("prev_css");
    prev.innerHTML = Local("prev");
    setTimeout(function () {
      prev.style.transition = "0.25s";
      prev.style.opacity = "0";
      setTimeout(function () {
        prev.style.display = "none";
        prev.style.innerHTML = "";
      }, 250);
    }, 50);
  }
  //网页所在位置
  try {
    if ((url_get() == undefined) | (url_get() == url[0])) {
      update_homepage(url[0]);
    } else {
      for (let index = 0; index < url.length; index++) {
        if (url_get() == url[index]) {
          update_homepage(url[index]);
          break;
        } else {
          loading_append();
        }
      }
    }
  } catch (err) {
    update_homepage(url[0]);
  } finally {
    prev();
  }
}
