const DefaultJSON = [
  {
    id: "Map",
    /* Map */
  },
  {
    id: "Player",
    /* Player */
    textures: [
      {
        id: "player",
        textures: "default",
        animation: {
          fps: { move: 3, attack: 1 },
          playback: { move: [0, 1, 0, 2], attack: [0] },
        },
      },
      {
        id: "steve",
        textures: "steve",
        animation: { fps: { move: 0, attack: 0 } },
      },
      {
        id: "alex",
        textures: "alex",
        animation: { fps: { move: 0, attack: 0 } },
      },
    ],
    Name: null,
    HP: 100,
    MaxHP: 100,
    Temperature: 36.8,
    Stamina: 10,
    ATK: 1,
    CRT: 5.0,
    CHD: 10.0,
    rucksack: { ItemMax: 64, spaceMax: 64 },
  },
  {
    id: "entity",
    /* entity */
  },
  {
    id: "block",
    /* block */
    empty: { type: "empty", textures: "null" },
    grass: {
      type: "earth",
      animation: {
        type: "tidy",
        fps: 3,
        start: 10,
        wait: 0.5,
      },
    },
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
function Save(params, id, json, text) {
  if (params == "new") {
    var Player = getDefaultJSON("Player");
    var save = { VERSION: VERSION, Player: Player, KeyDown: DefaultKeyDown };
    Local_Save(GameName, JSON.stringify(save));
  } else {
    if (!JSON.parse(Local(GameName))) {
      Save("new");
    }
    var save = JSON.parse(Local(GameName));
    if (params == "update") {
      save[id][text] = json;
      console.log("Save > " + text + " > " + json);
      Local_Save(GameName, JSON.stringify(save));
    } else {
      if (params == "query") {
        if (!id) {
          return save;
        } else {
          if (!json) {
            return save[id];
          } else {
            params = json.split("|");
            json = save[id];
            for (let index = 0; index < params.length; index++) {
              try {
                json = json[params[index]];
              } catch (err) {}
            }
            return json;
          }
        }
      }
    }
  }
}
function GameLocal(id) {
  var save = JSON.parse(Local(GameName));
  if (save) {
    if (save[id]) {
      return save[id];
    }
  } else {
    Save("new");
  }
}
function getDefaultJSON(id, json) {
  for (let index = 0; index < DefaultJSON.length; index++) {
    if (DefaultJSON[index]["id"] == id) {
      if (json) {
        var split = json.split("|");
        json = DefaultJSON[index];
        for (let i = 0; i < split.length; i++) {
          try {
            json = json[split[i]];
          } catch (err) {}
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
const map = [
  {
    Id: "MainInterface",
    Map: {
      length: [9, 16],
      size: 100,
      1: {
        1: { block: "grass" },
        2: { block: "grass" },
        3: { block: "grass" },
        4: { block: "grass" },
        5: { block: "grass" },
        6: { block: "grass" },
        7: { block: "grass" },
        8: { block: "grass" },
        9: { block: "grass" },
        10: { block: "grass" },
        11: { block: "grass" },
        12: { block: "grass" },
        13: { block: "grass" },
        14: { block: "grass" },
        15: { block: "grass" },
        16: { block: "grass" },
      },
      2: {
        1: { block: "grass" },
        3: { block: "grass" },
        4: { block: "grass" },
        5: { block: "grass" },
        7: { block: "grass" },
        8: { block: "grass" },
        9: { block: "grass" },
        10: { block: "grass" },
        11: { block: "grass" },
        12: { block: "grass" },
        13: { block: "grass" },
        14: { block: "grass" },
        15: { block: "grass" },
        16: { block: "grass" },
      },
      3: {
        1: { block: "grass" },
        3: { block: "grass" },
        4: { block: "grass" },
        5: { block: "grass" },
        6: { block: "grass" },
        7: { block: "grass" },
        8: { block: "grass" },
        9: { block: "grass" },
        10: { block: "grass" },
        11: { block: "grass" },
        12: { block: "grass" },
        13: { block: "grass" },
        14: { block: "grass" },
        15: { block: "grass" },
        16: { block: "grass" },
      },
      4: {
        1: { block: "grass" },
        4: { block: "grass" },
        5: { block: "grass" },
        7: { block: "grass" },
        8: { block: "grass" },
        11: { block: "grass" },
        12: { block: "grass" },
        14: { block: "grass" },
        15: { block: "grass" },
        16: { block: "grass" },
      },
      5: {
        1: { block: "grass" },
        3: { block: "grass" },
        5: { block: "grass" },
        7: { block: "grass" },
        9: { block: "grass" },
        10: { block: "grass" },
        13: { block: "grass" },
        14: { block: "grass" },
        15: { block: "grass" },
        16: { block: "grass" },
      },
      6: {
        1: { block: "grass" },
        3: { block: "grass" },
        5: { block: "grass" },
        7: { block: "grass" },
        8: { block: "grass" },
        9: { block: "grass" },
        10: { block: "grass" },
        11: { block: "grass" },
        12: { block: "grass" },
        13: { block: "grass" },
        14: { block: "grass" },
        15: { block: "grass" },
        16: { block: "grass" },
      },
      7: {
        1: { block: "grass" },
        2: { block: "grass" },
        3: { block: "grass" },
        4: { block: "grass" },
        5: { block: "grass" },
        6: { block: "grass" },
        7: { block: "grass" },
        8: { block: "grass" },
        9: { block: "grass" },
        10: { block: "grass" },
        11: { block: "grass" },
        12: { block: "grass" },
        13: { block: "grass" },
        14: { block: "grass" },
        15: { block: "grass" },
        16: { block: "grass" },
      },
      8: {
        1: { block: "grass" },
        2: { block: "grass" },
        3: { block: "grass" },
        4: { block: "grass" },
        5: { block: "grass" },
        6: { block: "grass" },
        7: { block: "grass" },
        8: { block: "grass" },
        9: { block: "grass" },
        10: { block: "grass" },
        11: { block: "grass" },
        12: { block: "grass" },
        13: { block: "grass" },
        14: { block: "grass" },
        15: { block: "grass" },
        16: { block: "grass" },
      },
      9: {
        1: { block: "grass" },
        2: { block: "grass" },
        3: { block: "grass" },
        4: { block: "grass" },
        5: { block: "grass" },
        6: { block: "grass" },
        7: { block: "grass" },
        8: { block: "grass" },
        9: { block: "grass" },
        10: { block: "grass" },
        11: { block: "grass" },
        12: { block: "grass" },
        13: { block: "grass" },
        14: { block: "grass" },
        15: { block: "grass" },
        16: { block: "grass" },
      },
    },
  },
];
