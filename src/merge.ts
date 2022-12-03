const merge_file = function (arr_1: number[], arr_2: number[]) {
  function merge(arr_1: number[], arr_2: number[]) {
    let merge_arr: number[] = [];
    let idx_arr_1 = 0;
    let idx_arr_2 = 0;
    while (idx_arr_1 < arr_1.length && idx_arr_2 < arr_2.length) {
      if (arr_1[idx_arr_1] <= arr_2[idx_arr_2]) {
        merge_arr.push(arr_1[idx_arr_1]);
        idx_arr_1++;
      } else {
        merge_arr.push(arr_2[idx_arr_2]);
        idx_arr_2++;
      }
    }
    if (idx_arr_1 < arr_1.length) {
      merge_arr = merge_arr.concat(arr_1.slice(idx_arr_1));
    } else {
      merge_arr = merge_arr.concat(arr_2.slice(idx_arr_2));
    }

    return merge_arr;
  }

  const ans_arr = merge(arr_1, arr_2);
  console.log(ans_arr);
  return ans_arr;
};

export default merge_file;
