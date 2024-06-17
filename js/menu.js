ls_menu_click = false;
function updata_menu() {
  let option_list = ["前往主页"];
  let menu = document.createElement("div");
  menu.setAttribute("id", "ls-menu");
  menu.setAttribute("class", "background");
  menu.style.borderRadius = "0px 0px 15px 15px";
  menu.style.transition = "0.5s";
  menu.style.position = "absolute";
  menu.style.top = "-45px";
  menu.style.right = "1%";
  menu.style.userSelect = "none";
  let m_option = document.createElement("div");
  m_option.setAttribute("id", "ls-m-home");
  m_option.setAttribute("class", "background");
  m_option.setAttribute("onclick", "url_r()");
  m_option.setAttribute("onmouseover", "m_o_hover(true)");
  m_option.setAttribute("onmouseout", "m_o_hover(false)");
  m_option.innerHTML = option_list[0];
  m_option.style.color = "#000";
  m_option.style.padding = "10px";
  m_option.style.margin = "5px";
  m_option.style.borderRadius = "15px";
  m_option.style.transition = "0.5s";
  menu.appendChild(m_option);
  let m_div = document.createElement("div");
  m_div.setAttribute("class", "background");
  m_div.style.position = "absolute";
  m_div.style.borderRadius = "0px 0px 15px 15px";
  m_div.style.padding = "0px 15px 15px 15px";
  m_div.style.right = "10%";
  let m_d_click = document.createElement("div");
  m_d_click.setAttribute("id", "ls-m-d-click");
  m_d_click.setAttribute("onclick", "m_d_c_active();");
  m_d_click.style.width = "0px";
  m_d_click.style.height = "0px";
  m_d_click.style.borderBottom = "15px solid #e8e6e3";
  m_d_click.style.borderRight = "15px solid transparent";
  m_d_click.style.transform = "rotate(-45deg) translateX(0px) translateY(0px)";
  m_d_click.style.transition = "0.5s";
  m_div.appendChild(m_d_click);
  menu.appendChild(m_div);
  document.getElementById("body").appendChild(menu);
}
function m_o_hover(Switch) {
  let m_option = document.getElementById("ls-m-home");
  if (Switch == true) {
    m_option.style.backgroundColor = "#00000030";
    m_option.style.transition = "0.5s";
  } else {
    m_option.style.backgroundColor = "";
    m_option.style.transition = "1s";
  }
}
function m_d_c_active() {
  let menu = document.getElementById("ls-menu");
  let m_option = document.getElementById("ls-m-home");
  let m_d_click = document.getElementById("ls-m-d-click");
  if (ls_menu_click == true) {
    ls_menu_click = false;
    menu.style.top = "-45px";
    m_option.style.transition = "0.25s";
    m_option.style.color = "#000";
    m_d_click.style.transform =
      "rotate(-45deg) translateX(0px) translateY(0px)";
  } else {
    menu.style.top = "0px";
    ls_menu_click = true;
    m_option.style.transition = "0.05s";
    m_option.style.color = "";
    m_d_click.style.transform =
      "rotate(135deg) translateX(5px) translateY(-5px)";
  }
}
