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
