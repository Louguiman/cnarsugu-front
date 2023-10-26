function getRandomColor(name) {
  const firstAlphabet = name.charAt(0).toLowerCase();
  const asciiCode = firstAlphabet.charCodeAt();
  const colorNum =
    asciiCode.toString() + asciiCode.toString() + asciiCode.toString();

  var num = Math.round(0xffffff * parseInt(colorNum));
  var r = (num >> 16) & 255;
  var g = (num >> 8) & 255;
  var b = num & 255;
  //character: firstAlphabet.toUpperCase(),
  return "rgba(" + r + "," + g + "," + b + ",0.7)";
}
export function getRandomColorFromTenthCHar(name) {
  const charTarget = name.lenght < 12 ? 10 : 11;
  const firstAlphabet = name.charAt(charTarget).toLowerCase();
  const asciiCode = firstAlphabet.charCodeAt();
  const colorNum =
    asciiCode.toString() + asciiCode.toString() + asciiCode.toString();

  var num = Math.round(0xffffff * parseInt(colorNum));
  var r = (num >> 16) & 255;
  var g = (num >> 8) & 255;
  var b = num & 255;
  //character: firstAlphabet.toUpperCase(),
  const backgroundColor = "rgba(" + r + "," + g + "," + b + ",0.9)";

  const textColor = getContrastingTextColor(backgroundColor);

  return { backgroundColor, textColor };
}
export default getRandomColor;

export function getFirstLetter(name) {
  const firstAlphabet = name.charAt(0).toUpperCase();
  return firstAlphabet;
}

function getContrastingTextColor(rgbaColor) {
  // Extract the R, G, and B components from the RGBA color string
  const match = rgbaColor.match(/\d+/g);
  if (!match || match.length < 3) {
    throw new Error("Invalid color format");
  }
  const [r, g, b] = match.map(Number);

  // Calculate the relative luminance
  const luminance =
    0.2126 * (r / 255) ** 2.2 +
    0.7152 * (g / 255) ** 2.2 +
    0.0722 * (b / 255) ** 2.2;

  // Determine whether to use white or black text based on luminance
  if (luminance > 0.5) {
    return "black"; // Use black text for light backgrounds
  } else {
    return "white"; // Use white text for dark backgrounds
  }
}
