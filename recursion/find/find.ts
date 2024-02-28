/** find: return t/f is val is in arr. */
//[] -> false
//[3] -> false
//[2, 3] -> true
//[1, 2, 3] --> true
function find(arr: number[], val: number): boolean {
  if (arr.length === 0) return false;
  if (arr[0] === val) return true;
  return (find(arr.slice(1), val));
}

export { find };