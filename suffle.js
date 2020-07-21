const colors = [
  "#800000",
  "#008080",
  "#000080",
  "#FFFF00",
  "#FF0000",
  "#008000",
  "#00FFFF",
  "#800080",
  "#808000",
  "#00FF00",
  "#FF00FF",
  "#0000FF",
];

const classes = [
  { name: "class 1", id: 1, color: "" },
  { name: "class 2", id: 2, color: "" },
  { name: "class 3", id: 3, color: "" },
];

const mapped = classes.map((the_class, index) => {
  the_class.color = colors[index];
});

console.log(classes);
