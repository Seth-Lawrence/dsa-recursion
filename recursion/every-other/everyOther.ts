/** everyOther: return a string with every other letter. */

function everyOther(str: string): string {
  if (str.length === 0) return "";
  let out = (str[0]) + everyOther(str.slice(2));

  return out;
}

export { everyOther };