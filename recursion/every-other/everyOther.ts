/** everyOther: return a string with every other letter. */

function everyOther(str: string): string {
  if (str.length === 0) return "";
  console.log(str[0]);
  everyOther(str.slice(2));
  // let idx = 0;
  // const letters: string [] = str.split("");
  // let curr = letters[idx];
  // let out = curr += everyOther()
  // return out;
}

export { everyOther };