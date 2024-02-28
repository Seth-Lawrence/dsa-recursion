/** findIndex: return index of val in arr (or -1 if val is not present). */
//[2, 3, 4] -> 4
//[2, 3, 4] -> idx = arr.length - 1 = 3
//[3, 4] -> arr.length - 1 = 2
//[4] --> len: 1, arr[0]
function findIndex(arr: number[], val: number): number {
  let idx: number = 0;
  if (arr.length === 0) return -1;
  if (arr[0] !== val) {
    findIndex(arr.slice(1), val);
  }
  return idx++;
}

export { findIndex };