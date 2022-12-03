import merge_file from "../src/merge";

describe("testing merge file", () => {
  test("should merge 2 sorted array", () => {
    let collection_1 = [1, 2, 3, 5, 7, 8];
    let collection_2 = [4, 6, 9, 10];
    let res = merge_file(collection_1, collection_2);
    expect(res).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
