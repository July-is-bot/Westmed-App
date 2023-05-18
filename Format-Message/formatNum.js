const formatNum = (num) => {
    num = num.toString();
    numArray = [];
    for (let i = 0; i < num.length; i++) {
      numArray.push(num[i])
    }
      numArray.splice(3, 0, " ");
      numArray.splice(8, 0, " ");
      numArray = numArray.join("");
      return numArray;
  }
  
  console.log(formatNum(9142872634));
  