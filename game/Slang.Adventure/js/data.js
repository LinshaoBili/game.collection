const DefaultJSON = [
  {
    id: "Map",
    /* Map */
  },
  {
    id: "Player",
    /* Player */
    textures: [
      { id: "player", textures: "default", animation: { move: 3, attack: 1 } },
      { id: "steve", textures: "steve", animation: { move: 0, attack: 0 } },
      { id: "alex", textures: "alex", animation: { move: 0, attack: 0 } },
    ],
    Name: null,
    HP: 100,
    MaxHP: 100,
    Temperature: 36.8,
    Stamina: 10,
    ATK: 1,
    CRT: 5.0,
    CHD: 10.0,
  },
  {
    id: "entity",
    /* entity */
  },
  {
    id: "block",
    /* block */
    empty: { type: "empty", textures: "null" },
    grass: { type: "earth" },
    case: { type: "object", textures: "null" },
  },
  {
    id: "item",
    /* item */
  },
  {
    id: "particle",
    /* particle */
  },
];
const DefaultKeyDown = {
  MoveTop: "w",
  MoveLeft: "a",
  MoveBottom: "s",
  MoveRight: "d",
  FullScreen: "p",
};
const map = [
  {
    Id: "TestMap",
    Map: {
      length: [5, 6],
      size: 50,
      1: {
        1: { block: "grass" },
        2: { block: "grass" },
        3: { block: "grass" },
        4: { block: "grass" },
        5: { block: "grass" },
        6: { block: "grass" },
      },
      2: {
        1: { block: "grass" },
        2: { block: "case" },
        3: { block: "grass" },
        4: { block: "grass" },
        5: { block: "grass" },
        6: { block: "grass" },
      },
      3: {
        1: { block: "grass" },
        2: { block: "grass" },
        3: { block: "grass" },
        4: { block: "grass" },
        5: { block: "grass" },
        6: { block: "grass" },
      },
      4: {
        1: { block: "grass" },
        2: { block: "grass" },
        3: { block: "grass" },
        4: { block: "grass" },
        5: { block: "grass" },
        6: { block: "grass" },
      },
      5: {
        1: { block: "grass" },
        2: { block: "grass" },
        3: { block: "grass" },
        4: { block: "grass" },
        5: { block: "grass" },
        6: { block: "grass" },
      },
    },
  },
];
function getDefaultJSON(id, json) {
  for (let index = 0; index < DefaultJSON.length; index++) {
    if (DefaultJSON[index]["id"] == id) {
      if (json) {
        var split = json.split("|");
        json = DefaultJSON[index];
        for (let i = 0; i < split.length; i++) {
          json = json[split[i]];
        }
      } else {
        json = DefaultJSON[index];
      }
      return json;
    }
  }
}
function jsonObject(json) {
  let keys = Object.keys(json);
  var jsonObject = [];
  var number = 0;
  var skip = ["id"];
  keys.forEach((key) => {
    if (key != skip[0]) {
      jsonObject[number] = key;
      number++;
    }
  });
  return jsonObject;
}
