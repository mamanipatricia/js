const info = {
  title: "Once Upon a Time",
  protagonist: {
    name: "Emma Swan",
    enemies: [
      { name: "Regina Mills", title: "Evil Queen" },
      { name: "Cora Mills", title: "Queen of Hearts" },
      { name: "Peter Pan", title: `The boy who wouldn't grow up` },
      { name: "Zelena", title: "The Wicked Witch" },
    ],
  },
};

let {
  title,
  protagonist: {
    name,
    enemies: [, , , { name: enemyName, title: enemytitle }],
  },
} = info;
