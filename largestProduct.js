class LargestProduct {
  constructor(number) {
    this.number = number;
    this.arr = this.number.split("").map(e => parseInt(e));
    this.prodArr = [];
  }

  getLargestProductIndex() {
    let largestProd = 0;
    let index = 0;
    for (let i = 0; i < this.arr.length; i++) {
      let group =
        this.arr[i] *
        this.arr[i + 1] *
        this.arr[i + 2] *
        this.arr[i + 3] *
        this.arr[i + 4];

      if (group > largestProd) {
        largestProd = group;
        index = i;
      } else {
        largestProd = largestProd;
      }
    }
    return index;
  }

  getLargestProduct() {
    let largestProd = 0;
    let index = 0;
    for (let i = 0; i < this.arr.length; i++) {
      let group =
        this.arr[i] *
        this.arr[i + 1] *
        this.arr[i + 2] *
        this.arr[i + 3] *
        this.arr[i + 4];

      if (group > largestProd) {
        largestProd = group;
        index = i;
      } else {
        largestProd = largestProd;
      }
    }
    return largestProd;
  }
}

module.exports = LargestProduct;
