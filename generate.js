const fs = require("fs");

const house = fs.readFileSync("./house.csv", "utf8").split("\n").map(v => {
  const t = v.split(",")
  return {
    district: t[0],
    name: t[1],
    href: t[2],
    picture: t[3],
  }
}).slice(1);

const senate = fs.readFileSync("./senate.csv", "utf8").split("\n").map(v => {
  const t = v.split(",")
  return {
    state: t[0],
    name: t[1],
    picture: t[2],
    href: t[3],
  }
}).slice(1);

const houseTemplate = require("./template/house.js");
const senateTemplate = require("./template/senate.js");

console.log(`
${senateTemplate(senate)}
`);
