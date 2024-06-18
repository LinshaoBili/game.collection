const Name = ["author/爱莉の林少/104930126", "studio/流光"];
function update() {
  try {
    let title = document.getElementById("title");
    title.innerHTML = split_text(Name[0], "/", 1) + " " + title.innerHTML;
  } catch (err) {
    let game_title = document.getElementById("game_title");
    game_title.innerHTML =
      window.location.href.split("/")[url_origin().split("/").length + 1];
  }
  let icon = document.getElementById("icon");
  icon.setAttribute("href", url_origin() + "/resource/icon.png");
}
update();
function update_name() {
  let name_update = document.getElementsByName("name");
  for (let index = 0; index < name_update.length; index++) {
    for (let i = 0; i < Name.length; i++) {
      if (
        name_update[index].getAttribute("tagname") ==
        split_text(Name[i], "/", 0)
      ) {
        name_update[index].innerHTML = split_text(Name[i], "/", 1);
        break;
      }
    }
  }
}
function update_icon() {
  let icon_update = document.getElementsByName("icon");
  for (let index = 0; index < icon_update.length; index++) {
    icon_update[index].style.backgroundImage =
      "url(" +
      url_origin() +
      "/resource/" +
      icon_update[index].getAttribute("tagname") +
      ".png)";
  }
}
