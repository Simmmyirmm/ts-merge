function init_dummy_data(num_start, num_stop) {
    var tmp_arr = [];
    for (var i = num_start; i < num_stop; i++) {
        tmp_arr.push(i);
    }
    return tmp_arr;
}
// const collection_1 = init_dummy_data(1, 10);
// const collection_2 = init_dummy_data(10, 20);
// console.log(collection_1);
// console.log(collection_2);
var collection_1 = [2, 4, 10, 13, 14, 19];
var collection_2 = [1, 3, 5, 6, 7, 8, 9, 11, 16];
function merge(arr_1, arr_2) {
    var merge_arr = [];
    var idx_arr_1 = 0;
    var idx_arr_2 = 0;
    while (idx_arr_1 < arr_1.length && idx_arr_2 < arr_2.length) {
        if (arr_1[idx_arr_1] <= arr_2[idx_arr_2]) {
            merge_arr.push(arr_1[idx_arr_1]);
            idx_arr_1++;
        }
        else {
            merge_arr.push(arr_2[idx_arr_2]);
            idx_arr_2++;
        }
    }
    if (idx_arr_1 < arr_1.length) {
        merge_arr = merge_arr.concat(arr_1.slice(idx_arr_1));
    }
    else {
        merge_arr = merge_arr.concat(arr_2.slice(idx_arr_2));
    }
    return merge_arr;
}
var ans_arr = merge(collection_1, collection_2);
console.log(ans_arr);
