export function randomRGBA() {
  var o = Math.round,
    r = Math.random,
    s = 205;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

export const stringToColour = function (str: string) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 9)) & 0xff; // Originally 8
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};
